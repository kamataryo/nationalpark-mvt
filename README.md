# 国立公園区域タイル

```
# Download nps_all.shp
$ ogr2ogr -f GeoJSON ./data/nps.geojson ./data/nps_all.shp -lco ENCODING=URF-8
$ tippecanoe -o ./data/nps.mbtiles -zg --drop-densest-as-needed ./data/nps.geojson
$ mb-util --image_format=pbf ./nps.mbtiles ./docs
$ find ./docs -name "*.pbf" -exec bash -c 'mv "$1" "${1%.pbf}".mvt' - '{}' \;
```
