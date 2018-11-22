// Type definitions for object-observer v1.1.4
// Project: https://github.com/gullerya/object-observer
// Definitions by: Yanice Guigou <https://github.com/akumaO6/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface ObservedChange {
    type: "insert" | "update" | "delete" | "reverse" | "shuffle";
    path: string[];
    value: any;
    oldValue?: any;
    object: object;
}
interface ObservableProxy {
    observe(observer: (changes: ObservedChange[]) => void): void;
    revoke(): void;
    unobserve(): void;
}
declare class Observable {
    static from<T extends object>(target: T): (T & ObservableProxy);
    static isObservable(input: any): boolean;
    constructor();
}

export = Observable;
