import type { Component } from "svelte";
type $$ComponentProps = {
    expanded?: boolean;
    expandable?: boolean;
    expandedWidth?: number;
    Icon: Component;
    title: string;
    middle: () => any;
    bottom?: () => any;
};
declare const Nav: Component<$$ComponentProps, {}, "">;
type Nav = ReturnType<typeof Nav>;
export default Nav;
