#!/usr/bin/env bash

tsc --out app.js cn/hiro/hello/Hello.ts cn/hiro/Main.ts
java -jar /Users/Hiro/Downloads/H5/closure-compiler/closure-compiler-v20160713.jar   --compilation_level ADVANCED --js_output_file app.min.js --js app.js