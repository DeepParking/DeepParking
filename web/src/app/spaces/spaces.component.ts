import { Component, OnInit } from '@angular/core';
import { Space } from '../space';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css'],
  providers: [SpaceService]
})
export class SpacesComponent implements OnInit {

  spaces: Space[];

  selectedSpace: Space;
  interval;

  onSelect(space: Space): void {
    this.selectedSpace = space;
  }
  onBack(): void {
    this.selectedSpace = undefined;
  }

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.getSpaces();
    }, 1000)
  }

  getSpaces(): void {
    this.spaceService.getSpaces()
      .subscribe(spaces => {
        this.spaces = spaces
      });
  }

  getSpacesByLocation(): void {
    navigator.geolocation.getCurrentPosition((coordinates) => {
      let lat = coordinates.coords.latitude
      let lng = coordinates.coords.longitude

      this.spaceService.getSpacesByLocation(lat, lng)
        .subscribe(spaces => {
          this.spaces = spaces
        });
    })
  }
}
