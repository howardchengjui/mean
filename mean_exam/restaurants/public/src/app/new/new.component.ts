import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  restaurant:any;
  err:any
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.restaurant={'name':'',"cuisine":""}
    this.err ={}
  }
  addRestaurant(){
    this._httpService.addNewRestaurant(this.restaurant).subscribe(data=>{
      console.log(data)
      if(data['errors']!=null){
        this.err['description']=data['errors']
        console.log("hi")
        }
      else{
        this._router.navigate(['/']);
      }
    })
  }
}
