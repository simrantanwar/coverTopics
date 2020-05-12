import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'src/pages/users/users.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthGuard1 } from 'src/guards/auth.guard1';


const routes: Routes = [
  // { path: 'users', loadChildren: './pages/pages.module#PagesModule' } // old method
  {path:'',pathMatch:'full',redirectTo:'hr'},
  {path:'hr',loadChildren:() => import('../pages/pages.module').then(m => m.PagesModule),canActivate:[AuthGuard]},
  {path:'finance',loadChildren:() => import('../finance/finance.module').then(m => m.FinanceModule),canActivate:[AuthGuard1]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
