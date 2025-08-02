type $$ComponentProps = {
    identificator?: string;
    title?: string;
    padding?: boolean;
    id?: string;
    children: () => any;
    middle?: () => any;
    actions?: () => any;
    buttons?: () => any;
    filter?: () => any;
};
declare const Card: import("svelte").Component<$$ComponentProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
