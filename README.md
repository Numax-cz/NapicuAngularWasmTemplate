# Angular & WebAssembly Template

Original code by [boyanio](https://github.com/boyanio/angular-wasm)

This project shows how WebAssembly could be used in Angular in form of components and helper services. The examples are written in C/C++ and compiled to WebAssembly using [Emscripten](https://emscripten.org).

## Build

You need Docker installed on your machine to compile the C/C++ examples to WebAssembly.  

To build the demo locally run:

```
npm i
npm run wasm
npm start
```

Then you can open your browser at `http://localhost:4200` to see it.

### Pre-compiled dependencies

For some of the examples, I have pre-compiled parts of the C/C++ source into linked bitcode (_.bc_ files) to ease the build process.

- [libSOIL](https://github.com/boyanio/SOIL-wasm) - Simple OpenGL Image Library (SOIL) is a tiny C library used primarily for uploading textures into OpenGL

## Questions & contribution

You can reach me on Twitter [@boyanio](https://twitter.com/boyanio). You can also open an issue here on GitHub or make a Pull-Request directly.
