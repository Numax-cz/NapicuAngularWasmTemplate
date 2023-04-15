#include <iostream>
#include <emscripten/bind.h>

std::string get_string() {
    return "Hello World from c++";
}

EMSCRIPTEN_BINDINGS(my_class_example) {
  emscripten::function("get_string", &get_string);
}