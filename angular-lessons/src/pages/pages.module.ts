import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { MatTableModule } from '@angular/material/table';
import { Routes, RouterModule } from '@angular/router';
import { SharedControlsModule } from 'src/shared controls/shared-controls.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { AuthGuard } from 'src/guards/auth.guard';


const routes: Routes = [
  // { path: 'users', loadChildren: './pages/pages.module#PagesModule' } // old method
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'users', component: UsersComponent},
  { path: 'products', component: ProductComponent },
  { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  declarations: [UsersComponent, ProductComponent, DashboardComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedControlsModule
  ],
  providers: [UserService, DashboardService]
})
export class PagesModule { }
