<script lang="ts">
    // import * as L from "leaflet";
    import { onMount } from "svelte";
    import "leaflet/dist/leaflet.css";

    let {
        height,
        markers,
        controls = true,
        center,
        zoom
    }: {
        controls?: boolean;
        height: string;
        markers?: Array<{ lat: number; lng: number; icon?: string }>;
        center?: { lat: number; lng: number };
        zoom?: number;
    } = $props();

    let target: HTMLDivElement;

    onMount(async () => {
        const L = await import("leaflet");

        // Initialize the map
        const map = L.map(target, {
            center: center ? [center?.lat, center?.lng] : [0, 0],
            zoom: zoom || 5,
            layers: [
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "© OpenStreetMap"
                })
            ],

            zoomControl: controls,
            dragging: controls,
            scrollWheelZoom: controls,
            doubleClickZoom: controls,
            boxZoom: controls,
            keyboard: controls,
            touchZoom: controls
        });

        if (markers && markers.length > 0) {
            for (const marker of markers || []) {
                // const mapMarker = L.marker([marker.lat, marker.lng]);
                const mapMarker = L.circleMarker([marker.lat, marker.lng], {
                    radius: 5,
                    color: "#f03",
                    fillColor: "#f03",
                    fillOpacity: 0.5
                }).addTo(map);
                mapMarker.addTo(map);
            }

            const bounds = L.latLngBounds(markers.map((marker) => [marker.lat, marker.lng]));
            map.fitBounds(bounds, {
                padding: [20, 20],
                maxZoom: 14
            });
        }

        // Cleanup on component destroy
        // return async () => {
        //     map.remove();
        //     console.log("map removed");
        // };
    });
</script>

<div class="map" style="width: 100%; height: {height};" bind:this={target}></div>

<style>
    div.map {
        z-index: 0;
    }
</style>
