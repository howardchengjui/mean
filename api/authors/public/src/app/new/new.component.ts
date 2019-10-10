import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author:any
  err:any
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { 

  }

  ngOnInit() {
    this.author={'name':''}
    this.err ={}
  }
  addAuthor(){
    this._httpService.addNewAuthor(this.author).subscribe(data=>{
      console.log(data)
      if(data['errors']!=undefined){
        this.err['description']=data['message']
        console.log(data['message'])
        console.log("hi")
        }
      else{
          this._router.navigate(['/']);
        }
    })
  }


}
