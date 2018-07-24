import { Injectable } from '@angular/core';
import { Space } from './space';
import { SPACES } from './mock-spaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  getSpaces(): Observable<Space[]> {
    return of(SPACES);
  }
  constructor() { }
}
