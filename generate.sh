#!/bin/bash

# Function to convert a word to lowercase
toLowerCase() {
  echo "$1" | tr '[:upper:]' '[:lower:]'
}

# Function to capitalize the first letter of a word
capitalize() {
  local word="$1"
  echo "${word^}"
}

# Function to convert a word to PascalCase
toPascalCase() {
  local input="$1"
  local output=""
  # Convert the input to lowercase and replace hyphens/underscores with spaces
  input="${input//[-_]/ }"

  # Iterate over each word in the input
  for word in $input; do
    # Capitalize the first letter of the word and add it to the output
    output+=$(capitalize "$word")
  done
  # Return the PascalCase string
  echo "$output"
}

processIcons() {
  local jsonFileName="$1"
  local baseName="${jsonFileName%.*}"

  local outputDir="$(pwd)/generated/${baseName}"
  mkdir -p "$outputDir"

  local iconPropsName="UniconProps"
  local iconPropsPath="${outputDir}/${iconPropsName}.ts"
  local iconsIndexPath="${outputDir}/${baseName}.ts"
  local iconsComponentPath="${outputDir}/icons"
  mkdir -p "$iconsComponentPath"

  local indexTs=()
  local types=()
  local usedNames=()

  indexTs+=("export * from './${iconPropsName}';")

  local uniconsConfig=$(cat node_modules/@iconscout/unicons/json/"$jsonFileName".json)

  # Check if uniconsConfig is valid JSON
  if ! echo "$uniconsConfig" | jq empty; then
    echo "Invalid JSON content in icon metadata file"
    exit 1
  fi

  echo "Processing '$jsonFileName' style icons..."

  # Loop over each icon in the config
  while IFS= read -r icon; do
    local name=$(echo "$icon" | jq -r '.name')
    local baseName="unicon-${name}"
    local pascalCaseName=$(toPascalCase "$baseName")
    local lowerCaseName=$(toLowerCase "$pascalCaseName")

    # Check for unique names and handle duplicates by appending counter number
    local originalPascalCaseName="$pascalCaseName"
    local counter=2
    while [[ " ${usedNames[*]} " =~ " ${lowerCaseName} " ]]; do
      pascalCaseName="${originalPascalCaseName}${counter}"
      lowerCaseName=$(toLowerCase "$pascalCaseName")
      ((counter++))
    done

    usedNames+=("$lowerCaseName")

    local location="${iconsComponentPath}/${pascalCaseName}.ts"
    local svgPath=$(echo "$icon" | jq -r '.svg')
    local svgFile=$(cat "node_modules/@iconscout/unicons/${svgPath}")

    # Extract all 'd' attributes
    local dPaths=$(echo "$svgFile" | grep -oP ' d="\K[^"]+')

    local pathElements=""
    while IFS= read -r dPath; do
      pathElements+="createElement('path', { d: '${dPath}' }),"
    done <<<"$dPaths"

    # Remove trailing comma
    pathElements=$(echo "$pathElements" | sed 's/,$//')

    read -r -d '' template <<EOM
import { createElement } from 'react';
import { ${iconPropsName} } from '../${iconPropsName}';
export const ${pascalCaseName} = ({ color='currentColor', size='24', ...others }: ${iconPropsName}) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    ${pathElements});
EOM

    echo "$template" >"$location"

    indexTs+=("export * from './icons/${pascalCaseName}';")
    types+=("  export const ${pascalCaseName}: Unicon;")
  done < <(echo "$uniconsConfig" | jq -c '.[]')

  printf "%s\n" "${indexTs[@]}" >"$iconsIndexPath"
  echo "Created index file: $iconsIndexPath"

  cat <<EOM >"$iconPropsPath"
import { SVGProps } from 'react';
export interface ${iconPropsName} extends SVGProps<SVGElement> {
  /**
    * The color of the icon.
    * @default 'currentColor'
    */
  color?: string;
  /**
    * The size of the icon, can be a string or a number.
    * @default 24
    */
  size?: string | number;
}
EOM
  echo "Created TypeScript declaration file: $iconPropsPath"
}

jsonFiles=("line" "monochrome" "solid" "thinline")
for jsonFileName in "${jsonFiles[@]}"; do
  processIcons "${jsonFileName}"
done
