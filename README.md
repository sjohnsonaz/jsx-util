# JSX Util

[![Build Status](https://travis-ci.org/sjohnsonaz/jsx-util.svg?branch=master)](https://travis-ci.org/sjohnsonaz/jsx-util)

JSX Utility functions

```` TypeScript
function If<T>(test: boolean, callbackTrue: () => T, callbackElse?: () => T): T;
````

```` TypeScript
function Switch<T>(test: string, cases: ICases<T>, defaultCase?: () => T);
````
