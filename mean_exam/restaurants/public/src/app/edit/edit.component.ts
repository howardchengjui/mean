import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  restaurant:any
  err:any
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
      this.restaurant=data
    })
  }
  editRestaurant(){
    this._httpService.editThisRestaurant(this.restaurant).subscribe(data=>{
      console.log(data)
      if(data['errors']!=null){
        this.err['description']=data['errors']
      }else{
        this.restaurant=data;
        this._router.navigate(['/'])
      }
    })
  }
}
