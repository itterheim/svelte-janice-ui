type $$ComponentProps = {
    name: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    password?: boolean;
    placeholder?: string;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
