import { Map, View } from "ol";
import { onMounted } from "vue";
import { GeoJSON } from "ol/format";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style, Text } from "ol/style";
import { getBottomLeft, getCenter, getHeight, getWidth } from "ol/extent";
import materialJpg from "@/assets/map-material.jpg";
import { toContext } from "ol/render";
import { MultiPolygon } from "ol/geom";
import { defaults } from "ol/interaction";

export default function useMap(target: string) {
  const mapInstance = new Map({
    view: new View({
      projection: "EPSG:4326",
      zoom: 12,
      center: [0, 0],
    }),
    controls: [],
    interactions: defaults({
      dragPan: false,
      mouseWheelZoom: false,
    }),
  });

  const vectorSource = new VectorSource({
    url: "https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json",
    format: new GeoJSON(),
  });

  const customStyle = new Style({
    renderer: function (pixelCoordinates, state) {
      const context = state.context;
      const multiPolygon = state.geometry.clone() as MultiPolygon;
      // @ts-ignore
      multiPolygon.setCoordinates(pixelCoordinates);
      const extent = multiPolygon.getExtent();
      const width = getWidth(extent);
      const height = getHeight(extent);
      const flag = state.feature.get("material");
      if (!flag || height < 1 || width < 1) {
        return;
      }
      context.save();
      const renderContext = toContext(context, {
        pixelRatio: 1,
      });
      renderContext.setFillStrokeStyle(
        new Fill(),
        new Stroke({
          color: "rgba(255,255,255,0.8)",
          width: 3,
        }),
      );
      renderContext.drawMultiPolygon(multiPolygon);
      context.clip();
      const bottomLeft = getBottomLeft(extent);
      const left = bottomLeft[0];
      const bottom = bottomLeft[1];
      context.drawImage(flag, left, bottom, width, height);
      context.restore();
    },
  });

  const layer = new VectorLayer({
    source: vectorSource,
    style: (feature) => {
      return [
        customStyle,
        new Style({
          text: new Text({
            text: feature.get("name"),
            fill: new Fill({
              color: "#fff",
            }),
            scale: 1.5,
          }),
          zIndex: 1,
        }),
      ];
    },
  });

  vectorSource.on("addfeature", function (event) {
    const feature = event.feature;
    const img = new Image();
    img.src = materialJpg;
    img.onload = function () {
      feature?.set("material", img);
    };
  });

  vectorSource.on("featuresloadend", (event) => {
    const view = mapInstance.getView();
    const extent = event.target.getExtent();
    view.fit(extent, { padding: [0, 30, 0, 0] });

    view.setCenter(getCenter(extent));
  });

  mapInstance.addLayer(layer);

  onMounted(() => {
    mapInstance.setTarget(target);
  });

  return {
    mapInstance,
  };
}
