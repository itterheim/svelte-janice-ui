import "leaflet/dist/leaflet.css";
type $$ComponentProps = {
    controls?: boolean;
    height: string;
    markers?: Array<{
        lat: number;
        lng: number;
        icon?: string;
    }>;
    center?: {
        lat: number;
        lng: number;
    };
    zoom?: number;
};
declare const LeafletMap: import("svelte").Component<$$ComponentProps, {}, "">;
type LeafletMap = ReturnType<typeof LeafletMap>;
export default LeafletMap;
