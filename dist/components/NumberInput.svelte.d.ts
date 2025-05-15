type $$ComponentProps = {
    name: string;
    value?: number;
    label?: string;
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
};
declare const NumberInput: import("svelte").Component<$$ComponentProps, {}, "value">;
type NumberInput = ReturnType<typeof NumberInput>;
export default NumberInput;
