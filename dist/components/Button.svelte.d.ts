import type { Component } from "svelte";
type $$ComponentProps = {
    submit?: boolean;
    label: string;
    Icon?: Component;
    onclick?: () => void;
    action?: boolean;
    danger?: boolean;
    small?: boolean;
};
declare const Button: Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
