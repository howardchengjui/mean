import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  data:any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  
  this.getSeattle();
}
  getSeattle(){
  this._httpService.getSeattleWeather().subscribe(data =>{
    console.log(data)
    this.data=data;

  })
}
}
