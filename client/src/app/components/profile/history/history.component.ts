import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import {MapService} from '../../../services/map.service';
import {GeoJson, FeatureCollection} from '../../map';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  public previousDonations: Array<Object> = [
    {
      donationDate: new Date(2017, 11, 30),
      donation: 1000,
      charityName: 'Water initiative in Africa',
      projectId: 1
    },
    {
      donationDate: new Date(2018, 3, 14),
      donation: 500,
      charityName: 'Development in Sierra Leone',
      projectId: 2
    }
  ];
}
