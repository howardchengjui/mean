import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient){}

  getTasks(){
    return this._http.get("/tasks");
  }
  getThisTask(id: String){
    return this._http.get(`/tasks/${id}`);
  }

  addTask(newtask){
    return this._http.post('/new', newtask)
  }

  deleteOneTask(id){
    return this._http.delete(`/tasks/${id}`);
  }
  editOneTask(updatedTask){
    return this._http.put(`/tasks/${updatedTask._id}`,updatedTask);

  }
  postToServer(newTask){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/new', newTask);  
  }
}

