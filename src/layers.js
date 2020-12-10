export default [
  {
    id: "contour",
    type: "line",
    source: "nps",
    "source-layer": "nps",
    paint: {
      "line-color": "gray",
      "line-opacity": 0.4,
    },
  },
  {
    id: "普通地域",
    type: "fill",
    source: "nps",
    "source-layer": "nps",
    filter: ["all", ["==", ["get", "地域区"], "普通地域"]],
    paint: {
      "fill-color": "cyan",
      "fill-opacity": 0.4,
    },
  },
  {
    id: "第1種特別地域",
    type: "fill",
    source: "nps",
    "source-layer": "nps",
    filter: ["all", ["==", ["get", "地域区"], "第1種特別地域"]],
    paint: {
      "fill-color": "purple",
      "fill-opacity": 0.4,
    },
  },
  {
    id: "第2種特別地域",
    type: "fill",
    source: "nps",
    "source-layer": "nps",
    filter: ["all", ["==", ["get", "地域区"], "第2種特別地域"]],
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.4,
    },
  },
  {
    id: "第3種特別地域",
    type: "fill",
    source: "nps",
    "source-layer": "nps",
    filter: ["all", ["==", ["get", "地域区"], "第3種特別地域"]],
    paint: {
      "fill-color": "lightgreen",
      "fill-opacity": 0.4,
    },
  },
  {
    id: "海域公園地区",
    type: "fill",
    source: "nps",
    "source-layer": "nps",
    filter: ["all", ["==", ["get", "地域区"], "海域公園地区"]],
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.4,
    },
  },
  {
    id: "特別保護地区",
    type: "fill",
    source: "nps",
    "source-layer": "nps",
    filter: ["all", ["==", ["get", "地域区"], "特別保護地区"]],
    paint: {
      "fill-color": "yellow",
      "fill-opacity": 0.4,
    },
  },
];
