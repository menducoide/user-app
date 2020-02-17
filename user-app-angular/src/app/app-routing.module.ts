import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; 
import { UserComponent } from "./user/user.component";
import { UserEditComponent} from './user/user-edit/user-edit.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserEditComponent
  },
  {
    path: 'user/:userId',
    component: UserEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
