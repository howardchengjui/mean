import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any;
  author:any;
  id:number;
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) {

     }

     ngOnInit(){
      this.getAuthors();
    }
  
    getAuthors(){
      this._httpService.getAllAuthors().subscribe( data =>{
        console.log(data)
        this.authors=data;
      })
    }

    deleteAuthor(id){
      this._httpService.deleteThisAuthor(id).subscribe( data =>{
        console.log(data)
        this.author=data;
        this.getAuthors();
      })
    
    }



}
