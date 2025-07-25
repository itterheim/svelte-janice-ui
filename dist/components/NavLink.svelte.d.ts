import type { Component } from "svelte";
type $$ComponentProps = {
    Icon: Component;
    label: string;
    href?: string;
    active?: boolean;
    chevron?: boolean;
    expanded?: boolean;
    onclick?: () => void;
};
declare const NavLink: Component<$$ComponentProps, {}, "">;
type NavLink = ReturnType<typeof NavLink>;
export default NavLink;
