exports.cmd =
  'em++ -Os --bind src/app/wasm/test/main.cpp -o src/assets/wasm/main.js -s MODULARIZE=1 -s EXPORT_NAME="TestModule"';
