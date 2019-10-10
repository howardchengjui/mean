import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants:any;
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants(){
    this._httpService.getAllRestaurants().subscribe(data=>{
      console.log(data)
      this.restaurants=data;
    })
  }
  deleteRestaurant(id){
    this._httpService.deleteThisRestaurant(id).subscribe( data =>{
      console.log(data)
      this.restaurants=data;
      this.getRestaurants();
    })
  
  }

}
