import { Injectable } from '@angular/core';
import { Space } from './space';
import { Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
}) 
 

@Injectable()
export class SpaceService {
  
  private apiUrl: string;
  private areaId: string;

  getSpacesByLocation(lat, lng): Observable<Space[]> {
    return this.http.get<Space[]>("http://" + this.apiUrl + "/spots?latitude=" + lat + "&longitude=" + lng)
  }

  getSpaces(): Observable<Space[]> {
    return this.http.get<Space[]>("http://" + this.apiUrl + "/spots/" + this.areaId)
  }

  constructor(private http: HttpClient) { 
    this.http.get('assets/json/config.json').subscribe((config) => {
      this.apiUrl = config['apiUrl'];
      this.areaId = config['areaId'];
    });
  } 
}