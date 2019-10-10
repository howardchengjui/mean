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
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mean';
  tasks : any;
  bulbasaur: any;
  abilities:any;
  pokeswithsameabil:any;
  TaskToShow:any;
  newTask: any;
  editTask:any;
  selectedTask:any;
  // pokemon:Array<any>;

  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
    this.newTask = { title: "", description: "" }
    this.TaskToShow = { title: "", description: "" }
    this.editTask = { title: "", description: "" }
    this.selectedTask
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    let observable = this._httpService.addTask(this.newTask)
    observable.subscribe( (data) => {
      console.log(data);
      this.newTask = { title: "", description: "" }
      this.getAllTasks();

  })
}

  getAllTasks(){
    let observable = this._httpService.getTasks()
    observable.subscribe( (data) => {
      // console.log(data)
      this.tasks=data
      console.log(this.tasks)
    })
  }

  showThisTask(id:String){
    let observable = this._httpService.getThisTask(id)
    observable.subscribe( (data) => {
      console.log(data)
      console.log(id)
      this.TaskToShow=data
    })
  }

  getOneTask(id:String){
    let observable = this._httpService.getThisTask(id)
    observable.subscribe( (data) => {
      console.log(data)
      console.log(id)
      this.selectedTask=data
    })
  }

  deleteThisTask(id:String){
    let observable=this._httpService.deleteOneTask(id)
    observable.subscribe( (data) => {
      console.log(data)
      console.log(id)
      this.getAllTasks();
    })
  }

    editThisTask(id:String){
    let observable=this._httpService.getThisTask(id)
    observable.subscribe( (data) => {
      console.log(data)
      console.log(id)
      this.editTask=data
    })
  }

  updateThisTask(){
    let observable=this._httpService.editOneTask(this.editTask)
    observable.subscribe( (data) => {
      console.log(data)
      this.editTask = { title: "", description: "" }
      this.getAllTasks();

  })
}
//   getBulbasaur(){
//     let observable = this._httpService.getPokemon()
//     observable.subscribe( (data) => {
//       console.log(data)
//       this.bulbasaur=data
//   })
//   }

//   getPokesWithSameAbilities(){
//     let observable1 = this._httpService.getPokemonsWithSameAbil()
//     observable1.subscribe( (data) => {
//       console.log(data)
//       console.log(data['pokemon'].length)
//   })
// }
}

