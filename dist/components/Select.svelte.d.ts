type $$ComponentProps = {
    name: string;
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    onchange?: () => void;
    children: () => any;
};
declare const Select: import("svelte").Component<$$ComponentProps, {}, "value">;
type Select = ReturnType<typeof Select>;
export default Select;
