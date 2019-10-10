// import { Component } from '@angular/core';
// import { HttpService } from './http.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//    title = 'app';
//    constructor(private _httpService: HttpService){}
//  }
import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mean';
  tasks : any;


  constructor(private _httpService: HttpService){
    this.tasks={};
  }

  getAllTasks(){
    let observable = this._httpService.getTasks()
    observable.subscribe( (data) => {
      console.log(data)
      this.tasks=data
      console.log(this.tasks)
    })
  }
}