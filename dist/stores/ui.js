import { writable } from "svelte/store";
export const theme = writable("latte");
// theme.subscribe(value => localStorage.setItem("carlog.theme", value));
export const showMenu = writable(false);
