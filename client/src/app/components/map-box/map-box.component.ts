import {Component, Input, KeyValueDiffers, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import {MapService} from '../../services/map.service';
import {GeoJson, FeatureCollection} from '../map';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  public map: mapboxgl.Map;
  public style = 'mapbox://styles/martinavagyan/cjfpesatd0o0m2rnyn96kt044';
  public lat = 40.0691;
  public lng = 45.0382;
  public message = 'Hello World!';
  public source: any;
  public markers: any;

  public regions: Map<string, any> = new Map<string, any>();

  private pointA: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    },
    "properties": {
      "title": "A",
      "icon": "circle",
      "description": "<strong>Quick overview of the region</strong><p>p>",
    }
  };

  private pointB: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [109.1896, 27.7315]
    },
    "properties": {
      "icon-color": "#ff6383",
      "title": "B",
      "icon": "circle",
      "description": "<strong>Quick overview of the region</strong><p>p>",
    }
  };

  private pointC: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [18.5582, 4.3947]
    },
    "properties": {
      "title": "C",
      "icon": "circle",
      "description": "<strong>Quick overview of the region</strong><p>p>",
    }
  };

  constructor(private mapService: MapService,
              private differs: KeyValueDiffers) {
  }

  ngOnInit() {
    this.markers = this.mapService.getMarkers();
    this.regions.set('A', this.pointA);
    this.regions.set('B', this.pointB);
    this.regions.set('C', this.pointC);
    this.initializeMap();
  }

  private initializeMap() {
    this.buildMap();
    this.addPoints();
    this.popupOnClick();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1,
      center: [this.lng, this.lat]
    });
  }

  addPoints() {
    const _this = this;
    this.map.on('load', function () {
      _this.map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [
              _this.pointA,
              _this.pointB,
              _this.pointC,
            ]
          }
        },
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        },
        "paint": {
          "icon-color": "#ff0000"
        }
      });
    });
  }

  popupOnClick() {
    const _this = this;
    this.map.on('load', function () {
      _this.map.on('click', 'points', function (e) {
        console.log("WORKS");
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(_this.map);
      });
    });
  }
}
