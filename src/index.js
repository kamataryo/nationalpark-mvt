import sources from "./sources";
import layers from "./layers";

const map = new window.geolonia.Map("#map");
map.on("load", () => {
  Object.keys(sources).map((id) => map.addSource(id, sources[id]));
  layers.forEach((layer) => {
    map.addLayer(layer);
    map.moveLayer(layer.id, "road_shield");
    map.on("click", layer.id, (e) => {
      const name = e.features[0].properties.名称;
      const zone = e.features[0].properties.地域区;
      console.log(e.lngLat);
      const popup = new window.geolonia.Popup({ closeOnClick: true })
        .setLngLat(e.lngLat)
        .setHTML(`<span>${name} ${zone}</span>`)
        .addTo(map);
    });
  });
});
