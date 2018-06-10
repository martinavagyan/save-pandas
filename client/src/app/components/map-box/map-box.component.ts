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

  private waterInAfrica: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [30.200108, 19.780782]
    },
    "properties": {
      "title": "Ebola outbreak in DRC",
      "icon": "circle",
      "description": "<h4>Ebola outbreak in DRC</h4>" +
      "<img src=\"../../../assets/DWB1.jpg\" alt=\"Italian Trulli\">" +
      "<h6>We need more water!</h6>" +
      "<a href =\"/projects/1\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
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
      "<a href =\"/projects/6\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
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
      "<a href =\"/projects/3\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
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
      "<a href =\"/projects/4\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
    }
  };

  private preventingChildLabour: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [107.347139, 31.657328]
    },
    "properties": {
      "title": "Preventing Child Labour",
      "icon": "circle",
      "description": "<h4>Donate for preventing child labour!</h4>" +
      "<img src=\"https://picsum.photos/200/150/?image=245\" alt=\"Italian Trulli\">" +
      "<h6>We need to protect the children!</h6>" +
      "<a href =\"/projects/5\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
    }
  };

  private amazonRiverFlood: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-55.126648, -2.163106]
    },
    "properties": {
      "title": "Amazon River Flood",
      "icon": "circle",
      "description": "<h4>Flood in the Amazon!</h4>" +
      "<img src=\"https://picsum.photos/200/150/?random\" alt=\"Italian Trulli\">" +
      "<h6>Please help the restoration of the area!</h6>" +
      "<a href =\"/projects/2\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
    }
  };

  private cropsProject: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [ -6.266155, 53.350140]
    },
    "properties": {
      "icon-color": "#ff6383",
      "title": "Crops Restoration",
      "icon": "circle",
      "description": "<h4>Crops restoration project</h4>" +
      "<img src=\"https://picsum.photos/200/150/?random\" alt=\"Italian Trulli\">" +
      "<h6>Numerous crops were destroyed by a horrible storm.</h6>" +
      "<a href =\"/projects/7\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> View Project</a>",
    }
  };

  constructor(private mapService: MapService,
              private differs: KeyValueDiffers) {
  }

  ngOnInit() {
    this.markers = this.mapService.getMarkers();
    this.regions.set('A', this.amazonRiverFlood);
    this.regions.set('B', this.cropsProject);
    this.regions.set('C', this.waterInAfrica);
    this.regions.set('D', this.schoolsInZimbabwe);
    this.regions.set('E', this.schoolsInBangladesh);
    this.regions.set('F', this.recyclingInSouthAsia);
    this.regions.set('G', this.preventingChildLabour);
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
              _this.waterInAfrica,
              _this.schoolsInZimbabwe,
              _this.schoolsInBangladesh,
              _this.recyclingInSouthAsia,
              _this.preventingChildLabour,
              _this.amazonRiverFlood,
              _this.cropsProject
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
