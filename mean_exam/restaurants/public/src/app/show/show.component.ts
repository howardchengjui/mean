import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id:any;
  restaurant:any
  err:any
  reviews:any
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id=params['id'];
      this.restaurant={name:"",cuisine:""}
      this.err={}
      this.getRestaurant();
  })
  }
  getRestaurant(){
    this._httpService.showOneRestaurant(this.id).subscribe(data=>{
      console.log(data)
      this.restaurant=data;
      this.reviews=data['review']
    })
  }


}
