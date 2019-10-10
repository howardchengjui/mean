import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service'
// import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './oakland.component.html',
  styleUrls: ['./oakland.component.css']
})
export class OaklandComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService
 ) {  }

  ngOnInit() {
    this.getOakland();
  }
  getOakland(){
    this._httpService.getOaklandWeather().subscribe(data =>{
      console.log(data)
      this.data=data;

    })
  }
}
