import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getChicago();
  }
  getChicago(){
    this._httpService.getChicagoWeather().subscribe(data =>{
      console.log(data)
      this.data=data;

    })
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
