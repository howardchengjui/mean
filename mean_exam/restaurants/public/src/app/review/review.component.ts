import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review:any
  err:any;
  id:any
  restaurant:any
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.review={'name':'',"stars":"","content":""}
    this.restaurant={name:"",cuisine:""}

    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id=params['id'];
      this.err={}
    })
    this.getRestaurant();
    this.review={"name":"","star":"","content":""}
}
  getRestaurant(){
    this._httpService.showOneRestaurant(this.id).subscribe(data=>{
      console.log(data)
      this.restaurant=data;
    })
  }

  addReview(){
    this._httpService.addNewReview(this.id,this.review).subscribe(data=>{
      console.log(data)
      if(data['errors']!=null){
        this.err['description']=data
        console.log("hi")
        }
      else{

          this._router.navigate(['/']);
        }
    })
  }
}
