type $$ComponentProps = {
    icon: string;
    action?: boolean;
    danger?: boolean;
    small?: boolean;
    grey?: boolean;
    title?: string;
    onclick?: () => void;
};
declare const IconButton: import("svelte").Component<$$ComponentProps, {}, "">;
type IconButton = ReturnType<typeof IconButton>;
export default IconButton;
