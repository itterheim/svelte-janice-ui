type $$ComponentProps = {
    title?: string;
    padding?: boolean;
    children: () => any;
    actions?: () => any;
};
declare const Card: import("svelte").Component<$$ComponentProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
