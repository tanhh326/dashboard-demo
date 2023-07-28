import { Map, View } from "ol";
import { onMounted } from "vue";
import { GeoJSON } from "ol/format";
import VectorSource from "ol/source/Vector";
import geojson from "@/assets/330100.json";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style, Text } from "ol/style";
import { getCenter } from "ol/extent";

export default function useMap(target: string) {
  const mapInstance = new Map({
    view: new View({
      projection: "EPSG:4326",
      zoom: 9,
      minZoom: 9,
    }),
    layers: [],
    controls: [],
  });

  const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(geojson),
  });

  mapInstance.getView().setCenter(getCenter(vectorSource.getExtent()));

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: (feature) => {
      return new Style({
        fill: new Fill({
          color: "rgb(51, 127, 250,1)",
        }),
        stroke: new Stroke({
          color: "rgba(107, 236, 245,1)",
          width: 1,
        }),
        text: new Text({
          text: feature.get("name"),
          fill: new Fill({
            color: "#fff",
          }),
          scale: 1.2,
          overflow: true,
        }),
      });
    },
  });

  mapInstance.addLayer(vectorLayer);

  onMounted(() => {
    mapInstance.setTarget(target);
  });

  return {
    mapInstance,
  };
}
