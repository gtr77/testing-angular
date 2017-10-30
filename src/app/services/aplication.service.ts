import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationService {

  private _url:string = "https://www.reddit.com/reddits.json";

  constructor( private _http:Http ) { console.log("Service Ready") }
  getAppInfo(){
    return this._http.get(this._url)
      .map( (response:Response) => response.json());
  }

}
