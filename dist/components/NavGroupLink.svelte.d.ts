import { type Component } from "svelte";
type $$ComponentProps = {
    Icon: Component;
    label: string;
    href?: string;
    active?: boolean;
    onclick?: () => void;
};
declare const NavGroupLink: Component<$$ComponentProps, {}, "">;
type NavGroupLink = ReturnType<typeof NavGroupLink>;
export default NavGroupLink;
