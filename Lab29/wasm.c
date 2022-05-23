#include <emscripten/emscripten.h>

#ifdef __cplusplus
	extern "C" {
#endif

int EMSCRIPTEN_KEEPALIVE sum(int x, int y) {return x+y;}
int EMSCRIPTEN_KEEPALIVE mul(int x, int y) {return x*y;}
int EMSCRIPTEN_KEEPALIVE sub(int x, int y) {return x-y;}

#ifdef __cplusplus
	}
#endif

// ---------git bush - открываем и делаем последовательно эти команды
// cd C:/Users/37529/Documents/1Uni/Node

// git clone https://github.com/emscripten-core/emsdk.git -- клонируем эту штуку
// cd C:/Users/37529/Documents/1Uni/Node/emsdk -- переходим 
// git pull
// install latest
// ./emsdk install latest
// ./emsdk activate latest

// source ./emsdk_env.sh
// emcc C:/Users/37529/Documents/GitHub/Node.JS/Lab29/wasm.c -s WASM=1 -o C:/Users/37529/Documents/GitHub/Node.JS/Lab29/wasm.html