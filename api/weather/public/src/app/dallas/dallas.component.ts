import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getDallas();
  }
  getDallas(){
    this._httpService.getDallasWeather().subscribe(data =>{
      console.log(data)
      this.data=data;

    })
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
