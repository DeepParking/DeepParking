import { Component, OnInit } from '@angular/core';
import { Space } from '../space';
import { SPACES } from '../mock-spaces';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {

  spaces = SPACES;

  selectedSpace: Space;

  onSelect(space: Space): void {
    this.selectedSpace = space;
  }
  onBack(): void{
    this.selectedSpace = undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
