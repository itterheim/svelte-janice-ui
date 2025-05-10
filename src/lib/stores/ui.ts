import { writable, type Writable } from "svelte/store";

export type Theme = "macchiato" | "latte"
export const theme: Writable<Theme> = writable("latte");

export const showMenu = writable(false);