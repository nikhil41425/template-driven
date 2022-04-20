import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Main } from './tdf.main';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  addColor:any="color:blue"

  userModel:Main=new Main;
  data:any=[]
  index: any;
  condition: boolean = false;

  constructor() { }




  ngOnInit(): void {
    let sync = new Observable(countOneToTen);
    sync.subscribe({
       next(num){
         console.log("num",num)
       }
    })
    function countOneToTen(observer:any){
      for(var i=0;i<10;i++){
        observer.next(i);
      }
      return {unsubscribe(){}}
    }
  }
  onSubmit(myForm:NgForm){
        if(this.condition){
          console.log(this.condition)
          this.data.splice(this.index, 1, myForm.value)
          this.condition = false;
        } else {
          this.data.push(myForm.value)
          this.condition = false
        }
        myForm.resetForm();
  }
  userEdit(i:any,edit:any){
    this.userModel.username1=edit.username
    this.userModel.email1=edit.email
    this.userModel.address1=edit.address
     this.index = i;
    this.condition = true
  }
  userDelete(i:any){
    this.data.splice(i,1)
  }
  btn(event:any){
    console.log("eveee",event.target.value)
  }
}
