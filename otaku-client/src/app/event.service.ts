import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:5000/api/events"

  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl);
  }

}
