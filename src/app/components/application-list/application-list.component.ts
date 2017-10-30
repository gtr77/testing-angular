import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/aplication.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html'
})
export class ApplicationListComponent implements OnInit {

  apps:Apps[];

  constructor( private _applicationService:ApplicationService) { }


  ngOnInit() {
    this._applicationService.getAppInfo().subscribe((apps) => {
      this.apps = apps;
      console.log(apps)
    });
  }

}

interface Apps{
  id:number,
  banner_img:string,
  header_title:string,
  header_img:string,
  icon_img:string,
  icon_size:string,
  key_color:string,
  description:string
}
