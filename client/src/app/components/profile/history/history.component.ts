import { Component } from '@angular/core';

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
      charityName: 'Panda\'s without Borders',
      projectId: 1
    },
    {
      donationDate: new Date(2018, 3, 14),
      donation: 500,
      charityName: 'Save the Humans',
      projectId: 2
    },
    {
      donationDate: new Date(2018, 6, 1),
      donation: 250,
      charityName: 'Get Martin some sleep',
      projectId: 3
    },
  ];
}
