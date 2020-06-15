# 国立公園区域タイル

## ライセンス

### タイル

このリポジトリでホストされているベクトルタイルは、[国立公園区域等 GIS データ](http://gis.biodic.go.jp/webgis/sc-026.html?kind=nps)([環境省生物多様性センター](http://www.biodic.go.jp/))を使用し [@kamataryo](https://github.com/kamataryo)が作成したものです。

### その他のソース

MIT

## タイルのビルド

### ツール

- ogr2ogr https://gdal.org/programs/ogr2ogr.html
- tippeacanoe https://github.com/mapbox/tippecanoe
- mb-util https://github.com/mapbox/mbutil

### タイルの作成

```shell
$ git clone https://github.com/kamataryo/nationalpark-mvt.git
$ cd nationalpark-mvt
```

国立公園の区域図を `./data/nps_all.shp` としてダウンロードしておきます。
http://gis.biodic.go.jp/webgis/sc-026.html?kind=nps

以下のコマンドを実行すると、docs フォルダにタイルが生成されます。

```shell
$ ogr2ogr -f GeoJSON ./data/nps.geojson ./data/nps_all.shp -lco ENCODING=URF-8
$ tippecanoe -o ./data/nps.mbtiles -zg --drop-densest-as-needed --no-tile-compression ./data/nps.geojson
$ mb-util --image_format=pbf ./data/nps.mbtiles ./docs
$ find ./docs -name "*.pbf" -exec bash -c 'mv "$1" "${1%.pbf}".mvt' - '{}' \;
```
