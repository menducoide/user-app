import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

import { UserApiService } from 'src/app/core/services/user-api.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  userForm: FormGroup;
  user: User;
  title: string;
  isUpdate: boolean;
  userId: number;
  constructor(
    private userService: UserApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.pattern('[0-9]+')]
    });
    this.route.params.subscribe(s => {
      this.isUpdate = (s.userId != null && typeof (s.userId) !== undefined);
      this.title = this.isUpdate ? 'Update user' : 'Create new user';
      if (this.isUpdate) {
        this.userId = s.userId;
        this.userService.get(s.userId).subscribe((data : any)=> {
          if(data!=null && typeof(data) !== undefined){
            this.userForm.controls.name.setValue(data.name);
            this.userForm.controls.userName.setValue(data.userName);
            this.userForm.controls.email.setValue(data.email);
            if(data.phone){
              this.userForm.controls.phone.setValue(data.phone);
            }
          }
        
        });
      }

    });
  }
  onSubmit() {
    if (!this.userForm.invalid) {
      const user = {} as User;
      user.name = this.userForm.controls.name.value;
      user.userName = this.userForm.controls.userName.value;
      user.email = this.userForm.controls.email.value;
      user.phone = this.userForm.controls.phone.value;
      if (this.isUpdate) { 
        user.userID = this.userId; 
        this.userService.update(this.userId,user).subscribe( success => {
          this.router.navigateByUrl('/');
        });
      }else{
        this.userService.create(user).subscribe( success => {
          this.router.navigateByUrl('/');
        });
      }
      



    }
  }
}
