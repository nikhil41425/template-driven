import { Component, OnInit } from '@angular/core';
import { User } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {




  ngOnInit(): void {


  }

  isLogIn : boolean = false;
isLogOut : boolean = true;

  // selected="red"

  isPresent=false

users:User[]=[
    {
      "user":"nikhil",
      "userId":1

    },
    {
      "user":"bittu",
      "userId":2
    }
]

  title = 'angular';
  studentArr: any[] = [ { "id": 1, "name": "student1" }, { "id": 2,
  "name": "student2" }, { "id": 3, "name": "student3"
  },

  { "id": 4, "name": "student4" } ];


    trackByData(index:any, studentArr:any): any{

      console.log("jhghjg",studentArr.id);

        return studentArr.id;
      }












}
