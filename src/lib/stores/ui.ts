import { writable, type Writable } from "svelte/store";

type Theme = "macchiato" | "latte"
export const theme: Writable<Theme> = writable("latte");
// theme.subscribe(value => localStorage.setItem("carlog.theme", value));

export const showMenu = writable(false)