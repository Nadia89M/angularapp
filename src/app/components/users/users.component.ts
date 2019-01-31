import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {


    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/03/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        email: 'kevin@gmail.com',
        isActive: false,
        hide: true,
        registered: new Date('05/03/2019 08:30:00')
      },
      {
        firstName: 'Karl',
        lastName: 'Doe',
        email: 'karl@gmail.com',
        isActive: true,
        hide: true,
        registered: new Date('07/03/2019 08:30:00')
      }
    ];

    this.loaded = true;

   }

  //  addUser(){
  //    this.user.isActive = true;
  //    this.user.registered = new Date;
  //    this.users.unshift(this.user);
  //    this.user = {
  //     firstName: "",
  //     lastName: "",
  //     email: ""
  //    }
  //  }

  //  toggleHide(user:User){
  //    user.hide = !user.hide;
  //  }

  onSubmit(e){
  }

}

