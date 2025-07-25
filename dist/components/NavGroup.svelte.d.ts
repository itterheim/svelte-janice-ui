import { type Component } from "svelte";
type $$ComponentProps = {
    Icon: Component;
    label: string;
    active?: boolean;
    children: () => any;
};
declare const NavGroup: Component<$$ComponentProps, {}, "">;
type NavGroup = ReturnType<typeof NavGroup>;
export default NavGroup;
