import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

import {GeoJson} from '../components/map';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Injectable()
export class MapService {

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  getMarkers() {
    return {};
  }
}
