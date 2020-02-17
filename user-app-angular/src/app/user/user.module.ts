import { NgModule } from '@angular/core';
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; 
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, matSortAnimations } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { UserApiService } from 'src/app/core/services/user-api.service';
@NgModule({
    declarations: [
      UserComponent,
      UserListComponent,
      UserEditComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        BrowserModule,        
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        
    ],
    providers: [UserApiService] 
  })
  export class UserModule { }