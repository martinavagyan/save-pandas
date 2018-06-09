import {Component, Input, KeyValueDiffers, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

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
      "description": "<h4>Save the frogs in Bordeaux</h4>" +
      "<img src=\"https://picsum.photos/200/150/?random\" alt=\"Italian Trulli\">" +
      "<h6>Over time endangered frogs became <br/> a center of delicate food.</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
    }
  };

  private pointB: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [18.5582, 4.3947]
    },
    "properties": {
      "icon-color": "#ff6383",
      "title": "B",
      "icon": "circle",
      "description": "<h4>Habitat in Uganda</h4>" +
      "<img src=\"https://picsum.photos/200/150/?random\" alt=\"Italian Trulli\">" +
      "<h6>They also need to sleep somewhere.</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
    }
  };

  private pointC: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [109.1896, 27.7315]
    },
    "properties": {
      "title": "C",
      "icon": "circle",
      "description": "<h4>Make the china reacher</h4>" +
      "<img src=\"https://picsum.photos/200/150/?random\" alt=\"Italian Trulli\">" +
      "<h6>Yeah, well there are pandas to save</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
    }
  };

  private waterInAfrica: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [30.200108, 19.780782]
    },
    "properties": {
      "title": "Water In Africa",
      "icon": "circle",
      "description": "<h4>Water initiative in Saharan Africa</h4>" +
      "<img src=\"https://picsum.photos/200/150/?image=171\" alt=\"Italian Trulli\">" +
      "<h6>We need more water!</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
    }
  };

  private schoolsInZimbabwe: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [19.0154, 29.1549]
    },
    "properties": {
      "title": "Schools in Zimbabwe",
      "icon": "circle",
      "description": "<h4>Schools in Zimbabwe!</h4>" +
      "<img src=\"https://picsum.photos/200/150/?image=3\" alt=\"Italian Trulli\">" +
      "<h6>There is a serious lack of schools in the region of Zimbabwe!</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
    }
  };

  private schoolsInBangladesh: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [90.3563, 23.6850]
    },
    "properties": {
      "title": "Schools in Bangladesh",
      "icon": "circle",
      "description": "<h4>Schools in Bangladesh!</h4>" +
      "<img src=\"https://picsum.photos/200/150/?image=3\" alt=\"Italian Trulli\">" +
      "<h6>We need a secondary school!</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
    }
  };

  private recyclingInSouthAsia: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [105.325654, 11.914890]
    },
    "properties": {
      "title": "Recycling Project",
      "icon": "circle",
      "description": "<h4>Developing the recycling in South Asia!</h4>" +
      "<img src=\"https://picsum.photos/200/150/?image=56\" alt=\"Italian Trulli\">" +
      "<h6>We need better recycling!</h6>" +
      "<button mat-button class=\"btn btn-default\" >VIEW</button>",
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
    this.regions.set('D', this.waterInAfrica);
    this.regions.set('E', this.schoolsInZimbabwe);
    this.regions.set('F', this.schoolsInBangladesh);
    this.regions.set('G', this.recyclingInSouthAsia);
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
              _this.waterInAfrica,
              _this.schoolsInZimbabwe,
              _this.schoolsInBangladesh,
              _this.recyclingInSouthAsia
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
