type $$ComponentProps = {
    icon: string;
    label: string;
    active?: boolean;
    children: () => any;
};
declare const NavGroup: import("svelte").Component<$$ComponentProps, {}, "">;
type NavGroup = ReturnType<typeof NavGroup>;
export default NavGroup;
