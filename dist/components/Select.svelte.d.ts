type $$ComponentProps = {
    name: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    onchange?: () => void;
    children: () => any;
};
declare const Select: import("svelte").Component<$$ComponentProps, {}, "value">;
type Select = ReturnType<typeof Select>;
export default Select;
