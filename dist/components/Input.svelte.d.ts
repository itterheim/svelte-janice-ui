import type { HTMLInputTypeAttribute } from "svelte/elements";
type $$ComponentProps = {
    name: string;
    value?: string | number;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    min?: number;
    max?: number;
    step?: number;
    left?: () => any;
    right?: () => any;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
