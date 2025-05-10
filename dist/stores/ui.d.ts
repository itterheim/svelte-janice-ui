import { type Writable } from "svelte/store";
export type Theme = "macchiato" | "latte";
export declare const theme: Writable<Theme>;
export declare const showMenu: Writable<boolean>;
