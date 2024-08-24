#!/bin/bash

svgFolders=("line" "monochrome" "solid" "thinline")
#svgFolders=("line")
for folder in "${svgFolders[@]}"
do
  echo "Processing $folder"
  pnpm svgr \
    --index-template=indexTemplate.cjs \
    --typescript \
    --ref \
    --svg-props width=24,height=24,color='currentColor' \
    --filename-case kebab \
    --out-dir generated/$folder \
    -- node_modules/@iconscout/unicons/svg/$folder
#  mv generated/$folder/index.ts generated/$folder/$folder.ts
done
