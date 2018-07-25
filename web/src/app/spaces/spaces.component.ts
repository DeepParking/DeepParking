import { Component, OnInit } from '@angular/core';
import { Space } from '../space';
import { SpaceService} from '../space.service';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css'],
  providers:[SpaceService]
})
export class SpacesComponent implements OnInit {

  spaces: Space[];

  selectedSpace: Space;

  onSelect(space: Space): void {
    this.selectedSpace = space;
  }
  onBack(): void{
    this.selectedSpace = undefined;
  }

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    this.getSpaces();
  }

  getSpaces(): void {
    navigator.geolocation.getCurrentPosition((coordinates) => {
      let lat = coordinates.coords.latitude
      let lng = coordinates.coords.latitude

      this.spaceService.getSpaces(lat, lng)
      .subscribe(spaces => {
        this.spaces = spaces 
      });
    })
  }
}
