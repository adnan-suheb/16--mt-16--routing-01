import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/users.interface';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userArr: Iuser[] = [];

  constructor(
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.userArr = this._user.fetchAllUsers();
  }

}
