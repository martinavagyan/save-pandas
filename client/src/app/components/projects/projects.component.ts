import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public isMapVisible: Boolean = true;
  public sampleProjects = [{
    "id": 1,
    "title": "Sinbad: Legend of the Seven Seas",
    "subtitle": "Antigen Laboratories, Inc.",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "image_url": "http://dummyimage.com/400x300.png/5fa2dd/ffffff"
  }, {
    "id": 2,
    "title": "Street Fighter",
    "subtitle": "Sanofi-Aventis U.S. LLC",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "image_url": "http://dummyimage.com/400x300.png/cc0000/ffffff"
  }, {
    "id": 3,
    "title": "See Spot Run",
    "subtitle": "AvPAK",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    "image_url": "http://dummyimage.com/400x300.png/cc0000/ffffff"
  }, {
    "id": 4,
    "title": "Blood of Heroes, The (Salute of the Jugger, The)",
    "subtitle": "Lundbeck LLC",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "image_url": "http://dummyimage.com/400x300.png/dddddd/000000"
  }, {
    "id": 5,
    "title": "Project A 2 ('A' gai wak juk jap)",
    "subtitle": "L. Perrigo Company",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "image_url": "http://dummyimage.com/400x300.png/ff4444/ffffff"
  }, {
    "id": 6,
    "title": "Stalingrad",
    "subtitle": "Major Pharmaceuticals",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    "image_url": "http://dummyimage.com/400x300.png/dddddd/000000"
  }, {
    "id": 7,
    "title": "Gods Must Be Crazy II, The",
    "subtitle": "Bausch & Lomb Incorporated",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ",
    "image_url": "http://dummyimage.com/400x300.png/dddddd/000000"
  }, {
    "id": 8,
    "title": "Christmas on Mars",
    "subtitle": "Coty US LLC",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    "image_url": "http://dummyimage.com/400x300.png/cc0000/ffffff"
  }, {
    "id": 9,
    "title": "Mother and Child",
    "subtitle": "Newton Laboratories, Inc.",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "image_url": "http://dummyimage.com/400x300.png/cc0000/ffffff"
  }, {
    "id": 10,
    "title": "Hysteria: The Def Leppard Story",
    "subtitle": "REMEDYREPACK INC.",
    "short_description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "full_description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "image_url": "http://dummyimage.com/400x300.png/5fa2dd/ffffff"
  }];

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
