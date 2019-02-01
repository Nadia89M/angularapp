import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //Property

  user: User;

  //Methods

  //runs when the component is initialized (Mostly used to inject dipendency)
  constructor() {
   }

  //runs when the component is initialized (Ajax call..)
  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: "john@gmail.com"
    }
  }

}

