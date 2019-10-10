import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  author:any
  newauthor:any
  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get('/author')
  }

  addNewAuthor(author){
    return this._http.post('/create',author)
  }

  editThisAuthor(author){
    return this._http.put(`/author/${author._id}`,author)
  }

  deleteThisAuthor(id){
    return this._http.delete(`/author/${id}`)
  }

  showOneAuthor(id){
    return this._http.get(`/author/${id}`)
  }
}
