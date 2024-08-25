#!/bin/bash

mkdir -p generated

svgFolders=("line" "solid" "thinline" "monochrome")
for folder in "${svgFolders[@]}"
do
  echo "Processing '$folder' style icons..."
  pnpm svgr \
    --index-template=templates/indexTemplate.cjs \
    --template=templates/iconTemplate.cjs \
    --svg-props="height={size},width={size},fill={color}" \
    --ref \
    --typescript \
    --filename-case kebab \
    --out-dir generated/$folder \
    -- node_modules/@iconscout/unicons/svg/$folder
  echo "Generated folder for '$folder' style icons"
done

echo "Replacing classNames in 'monochrome' style icons..."
# Determine the correct sed command based on the OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    SED_COMMAND="sed -i ''"
else
    SED_COMMAND="sed -i"
fi
for file in generated/monochrome/*.tsx; do
  # Delete existing opacity={blah} props
  $SED_COMMAND '/opacity={.*}/d' "$file"
  # Replace classNames with corresponding opacity props to avoid stylesheets
  $SED_COMMAND 's/className="uim-primary"/opacity={1}/g' "$file"
  $SED_COMMAND 's/className="uim-secondary"/opacity={0.7}/g' "$file"
  $SED_COMMAND 's/className="uim-tertiary"/opacity={0.5}/g' "$file"
  $SED_COMMAND 's/className="uim-quaternary"/opacity={0.25}/g' "$file"
done
echo "Finished replacing classNames in 'monochrome' style icons"

touch generated/UniconProps.ts
echo "
import type { SVGProps } from 'react'
export interface UniconProps extends SVGProps<SVGSVGElement> {
   /**
     * The size of the icon.
     * Passed down to the SVG's height and width attributes.
     * @default 24
     */
   size?: number | string;
   /**
     * The color of the icon.
     * @default 'currentColor'
     */
   color?: string;
 }
 " > generated/UniconProps.ts
echo "Generated UniconProps.ts"
