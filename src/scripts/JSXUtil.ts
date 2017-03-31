export interface ICases<T> {
    [index: string]: () => T;
}

export function If<T>(test: boolean, callbackTrue: () => T, callbackElse?: () => T): T {
    if (test) {
        if (callbackTrue) {
            return callbackTrue();
        } else {
            return null;
        }
    } else {
        if (callbackElse) {
            return callbackElse();
        } else {
            return null;
        }
    }
}

export function Switch<T>(test: string, cases: ICases<T>, defaultCase?: () => T) {
    var validCase = cases[test] || defaultCase;
    if (validCase) {
        validCase();
    }
}

export default class JSXUtil {
    static if = If;
    static switch = Switch;
}
