import type { Component } from "svelte";
type $$ComponentProps = {
    Icon?: Component;
    title: string;
    back?: boolean;
    children?: () => any;
};
declare const Header: Component<$$ComponentProps, {}, "">;
type Header = ReturnType<typeof Header>;
export default Header;
