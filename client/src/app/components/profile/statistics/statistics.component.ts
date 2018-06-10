import {Component} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  public moneyDonated: Number = 1750;

  public resourcesGathered: Number[] = [20, 30, 50];
  public resourcesGatheredLabels = ['Water (%)', 'Training (%)', 'Medicine (%)'];

  public volunteersTrained: Object[] = [ { data: [250], label: 'Volunteers Trained' }, { data: [550], label: 'Vaccinated kids' }];

  public pandasSaved: Object[] = [ { data: [34], label: 'Pandas Saved' }, { data: [250], label: 'Water' }, { data: [150], label: 'Medicine distributed' }, { data: [100], label: 'Schools built' } ];
}
