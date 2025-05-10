type $$ComponentProps = {
    submit?: boolean;
    label: string;
    icon?: string;
    onclick?: () => void;
    action?: boolean;
    danger?: boolean;
    small?: boolean;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
