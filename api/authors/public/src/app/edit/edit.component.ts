import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any;
  id:any;
  err:any;
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) {
    }
    
    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id=params['id'];
      this.author={name:""}
      this.err={}
    });
    // this.getAuthor(this.id);
  }
  getAuthor(){
    this._httpService.showOneAuthor(this.id).subscribe(data=>{
      console.log(data)
      this.author=data
    })
  }
  editAuthor(){
    this._httpService.editThisAuthor(this.author).subscribe(data=>{
      console.log(data)
      if(data['errors']!=undefined){
        this.err['description']=data['message']
      }else{
        this.author=data;
        this._router.navigate(['/'])

      }
    })
  }
}



