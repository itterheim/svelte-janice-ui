type $$ComponentProps = {
    href?: string;
    icon: string;
    label?: string;
    active?: boolean;
    gap?: boolean;
    onclick?: () => void;
};
declare const NavLink: import("svelte").Component<$$ComponentProps, {}, "">;
type NavLink = ReturnType<typeof NavLink>;
export default NavLink;
