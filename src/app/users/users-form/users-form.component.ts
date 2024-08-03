import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users.interface';
import { CustomRegex } from 'src/app/shared/model/validationPattern';
import { UserService } from 'src/app/shared/service/user.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  userForm!: FormGroup;
  userObj!: Iuser;
  userId!: string;
  userRole!: string;
  isInEditMode: boolean = false;
  ageArr: number[] = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]


  constructor(
    private _routes: ActivatedRoute,
    private _router: Router,
    private _user: UserService,
    private _uuid: UuidService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.manageUserIdParams();
    this.manageQueryParams();
  }

  createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username),
      Validators.minLength(6), Validators.maxLength(18)
      ]),
      personImg: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
      userDetails: new FormControl(null, [Validators.required, Validators.minLength(12)]),
      userAge: new FormControl(null, Validators.required),
      userGender: new FormControl(null, Validators.required),
      userAddress: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      userEmail: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)])
    })
  }

  manageUserIdParams() {
    this.userId = this._routes.snapshot.params['userId'];
    if (this.userId) {
      this.isInEditMode = true;
      this.userObj = this._user.getSingleUserObj(this.userId);
      this.userForm.patchValue(this.userObj);
      console.log(this.userObj);
      
    }
    else {
      this.isInEditMode = false;
    }
  }

  manageQueryParams() {
    this.userRole = this._routes.snapshot.queryParams['userRole'];
    if (this.userRole === 'buyer') {
      this.userForm.disable();
    }
    else {
      this.userForm.enable();
    }
  }


  get control() {
    return this.userForm.controls;
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      let newUser = { ...this.userForm.getRawValue(), userId: this._uuid.uuid() };
      this._user.addUser(newUser);
    }
  }
  updateUser() {
    if (this.userForm.valid) {
      let updatedObj = { ...this.userForm.getRawValue(), userId: this.userId };
      this._user.updateUser(updatedObj);
    }
  }

  onCancel() {
    this._router.navigate(['/users']);
  }
}
