import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getOakland();
  }
  getOakland(){
    this._httpService.getOaklandWeather().subscribe(data =>{
      console.log(data)
      this.data=data;

    })
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
