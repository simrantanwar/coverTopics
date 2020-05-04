import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'src/pages/users/users.component';


const routes: Routes = [
  // { path: 'users', loadChildren: './pages/pages.module#PagesModule' } // old method
  {path:'pages',loadChildren:() => import('../pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
