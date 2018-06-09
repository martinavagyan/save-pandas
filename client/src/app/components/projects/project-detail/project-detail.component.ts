import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from "../../../services/transaction.service";
import {Transaction} from "../../../services/transaction";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  public project = {
    name: 'Ebola outbreak in DRC',
    shortDescription: 'The symptoms of Ebola are greatly exaggerated in the popular press. It’s not a disease of apocalyptic hemorrhaging from every orifice, and symptoms can easily be mistaken for other maladies. In this case, the first patient—a 45-year-old man who contracted the virus on 22 April—initially went to see a traditional healer.',
    fullDescription: 'When that didn’t work, he took a taxi to a health center—and died on the way. (Both the driver, and a third individual who cared for the man, also eventually died.) The center quickly suspected Ebola and immediately sent samples to a national laboratory in Kinshasa. The staff there had the right knowledge, training, and connections—they ran some preliminary tests while also calling international colleagues. Rimoin flew over with the latest diagnostics.When that didn’t work, he took a taxi to a health center—and died on the way. (Both the driver, and a third individual who cared for the man, also eventually died.) The center quickly suspected Ebola and immediately sent samples to a national laboratory in Kinshasa. The staff there had the right knowledge, training, and connections—they ran some preliminary tests while also calling international colleagues. Rimoin flew over with the latest diagnostics.When that didn’t work, he took a taxi to a health center—and died on the way. (Both the driver, and a third individual who cared for the man, also eventually died.) The center quickly suspected Ebola and immediately sent samples to a national laboratory in Kinshasa. The staff there had the right knowledge, training, and connections—they ran some preliminary tests while also calling international colleagues. Rimoin flew over with the latest diagnostics.When that didn’t work, he took a taxi to a health center—and died on the way. (Both the driver, and a third individual who cared for the man, also eventually died.) '
  };
  public resourcesGathered: Number[] = [20, 30, 50];
  public resourcesGatheredLabels = ['Water (%)', 'Training (%)', 'Medicine (%)'];
  public volunteersTrained: Object[] = [{data: [250], label: 'Volunteers Trained'}];
  public pandasSaved: Object[] = [ { data: [34], label: 'Pandas Saved' } ];
  public projectGoals: Array<Transaction> =null;
    // [
    //   {
    //     milestoneName: "Vaccinate 3000 children by end of year",
    //     timestamp: new Date(2018, 3, 14),
    //     location: "Kinshasa, Congo",
    //     donation: 1000,
    //     milestoneId: 1,
    //   },
    //   {
    //     milestoneName: "Educate 200 nurses the end of first quarter",
    //     timestamp: new Date(2018, 3, 14),
    //     location: "Bukavu, Congo",
    //     donation: 1000,
    //     milestoneId: 1,
    //   },
    //   {
    //     milestoneName: "Deploy team of 8 volunteers to impacted areas",
    //     timestamp: new Date(2018, 6, 1),
    //     location: "Kisangani, Congo",
    //     donation: 1000,
    //     milestoneId: 1,
    //   },
    // ];

  public constructor(private route: ActivatedRoute,
                     private transactionService: TransactionService) {
  }

  ngOnInit() {
    // this.transactionService.addTransaction(this.projectGoals[0]).subscribe();
    // this.transactionService.addTransaction(this.projectGoals[1]).subscribe();
    // this.transactionService.addTransaction(this.projectGoals[2]).subscribe();

    this.transactionService.getLatestNTransactions(5).subscribe((result) => {
      console.log(result);
      this.projectGoals = result;
    });
  }

}
