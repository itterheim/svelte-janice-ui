type $$ComponentProps = {
    name: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
