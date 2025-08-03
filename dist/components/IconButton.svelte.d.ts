import type { Component } from "svelte";
type $$ComponentProps = {
    Icon: Component;
    action?: boolean;
    danger?: boolean;
    small?: boolean;
    grey?: boolean;
    title?: string;
    onclick?: (e: Event) => void;
};
declare const IconButton: Component<$$ComponentProps, {}, "">;
type IconButton = ReturnType<typeof IconButton>;
export default IconButton;
