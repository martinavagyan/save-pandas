import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public isMapVisible: Boolean = true;
  public sampleProjects = [{
    "id": 1,
    "title": "Water initiative in saharan africa",
    "subtitle": "Antigen Laboratories, Inc.",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "image_url": "assets/twokids.jpg"
  }, {
    "id": 2,
    "title": "Amazon river annual flood",
    "subtitle": "Side effects of global warming",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    "image_url": "assets/nature.jpg"
  }, {
    "id": 3,
    "title": "Secondary Education in Bangladesh",
    "subtitle": "",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    "image_url": "assets/schoolkids.jpg"
  }, {
    "id": 4,
    "title": "Recycling in south asia",
    "subtitle": "Lundbeck LLC",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "image_url": "assets/ecosystem.jpg"
  }, {
    "id": 5,
    "title": "Child labour east asia",
    "subtitle": "L. Perrigo Company",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "image_url": "assets/lostfreedom.jpg"
  }, {
    "id": 6,
    "title": "Primary Education in Zimbabwe",
    "subtitle": "",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "image_url": "assets/morekids.jpg"
  }, {
    "id": 7,
    "title": "Sustainable crops project",
    "subtitle": "Bausch & Lomb Incorporated",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "full_description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ",
    "image_url": "assets/crops.jpg"
  }];

  constructor() {
  }

  ngOnInit() {
  }

  public hideMap() {
    this.isMapVisible = false;
  }

  public showMap() {
    this.isMapVisible = true;
  }
}
