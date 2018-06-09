import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public isMapVisible: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public hideMap() {
    this.isMapVisible = false;
  }

  public showMap() {
    this.isMapVisible = true;
  }
}
