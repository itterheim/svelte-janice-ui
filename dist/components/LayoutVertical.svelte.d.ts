type $$ComponentProps = {
    narrow?: boolean;
    stretch?: boolean;
    padding?: boolean;
    border?: boolean;
    header?: () => any;
    children: () => any;
};
declare const LayoutVertical: import("svelte").Component<$$ComponentProps, {}, "">;
type LayoutVertical = ReturnType<typeof LayoutVertical>;
export default LayoutVertical;
