import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getOaklandWeather(){
    return this._http.get('https://api.openweathermap.org/data/2.5/find?q=oakland&appid=4ce826ad8b8eb3ed2addd818cbde1100')
  }
  getDallasWeather(){
    return this._http.get('https://api.openweathermap.org/data/2.5/find?q=dallas&appid=4ce826ad8b8eb3ed2addd818cbde1100')
  }
  getSeattleWeather(){
    return this._http.get('https://api.openweathermap.org/data/2.5/find?q=seattle&appid=4ce826ad8b8eb3ed2addd818cbde1100')
  }
  getSanJoseWeather(){
    return this._http.get('https://api.openweathermap.org/data/2.5/find?q=cupertino&appid=4ce826ad8b8eb3ed2addd818cbde1100')
  }
  getChicagoWeather(){
    return this._http.get('https://api.openweathermap.org/data/2.5/find?q=chicago&appid=4ce826ad8b8eb3ed2addd818cbde1100')
  }
}
