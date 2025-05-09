import { type Writable } from "svelte/store";
type Theme = "macchiato" | "latte";
export declare const theme: Writable<Theme>;
export declare const showMenu: Writable<boolean>;
export {};
