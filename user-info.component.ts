import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name: string = 'Jan';
  name2: string = '';
  showP: boolean = true;

  userArray: User[] = [
    new User("Jan", "Kowalski", 30, "Kraków"),
    new User("Monika", "Nowak", 20, "Płock"),
    new User("Kazimierz", "Góra", 56, "Rzeszów"),
  ]


  isDisabled(): boolean {
    if (this.name === 'Jan'){
      return false;
    }
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

  deleteUser(){
    this.name = '';
  }

  showPrimary(age: number): boolean{
    if (age > 40){
      return true;
    }
    return false;
  }

  onSubmit(f: NgForm){
    console.log(f);
    let user: User = new User(
      f.value.firstName,
      f.value.lastName,
      f.value.age,
      f.value.city
    );
    this.userArray.push(user);
    f.reset();
  }

}
