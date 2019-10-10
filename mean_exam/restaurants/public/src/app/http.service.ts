import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllRestaurants(){
    return this._http.get('/restaurant')
  }

  addNewRestaurant(restaurant){
    return this._http.post('/create',restaurant)
  }

  editThisRestaurant(restaurant){
    return this._http.put(`/restaurant/${restaurant._id}`,restaurant)
  }

  deleteThisRestaurant(id){
    return this._http.delete(`/restaurant/${id}`)
  }

  showOneRestaurant(id){
    return this._http.get(`/restaurant/${id}`)
  }

  addNewReview(id,review){
    return this._http.post(`/restaurant/${id}/review`,review)
  }
}
