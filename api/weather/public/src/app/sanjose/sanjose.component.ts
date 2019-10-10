import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  data:any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  
  this.getSanjose();
}
  getSanjose(){
  this._httpService.getSanJoseWeather().subscribe(data =>{
    console.log(data)
    this.data=data;

  })
}
}
