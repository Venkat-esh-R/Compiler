#!/bin/bash
gcc compiler.c -o compiler
if [ $? -eq 0 ]; then
    ./compiler
else
    echo "Compilation failed."
fi
