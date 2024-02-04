rm -r dist
mkdir -p ./dist/node_modules/eruda
cp ./node_modules/eruda/eruda.js ./dist/node_modules/eruda
cp ./.dev/add-eruda.js dist