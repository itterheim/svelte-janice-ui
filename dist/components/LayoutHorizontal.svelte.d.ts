type $$ComponentProps = {
    header: () => any;
    left: () => any;
    right?: () => any;
    showRight?: boolean;
};
declare const LayoutHorizontal: import("svelte").Component<$$ComponentProps, {}, "">;
type LayoutHorizontal = ReturnType<typeof LayoutHorizontal>;
export default LayoutHorizontal;
