import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { UserProfileComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users/:id', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
