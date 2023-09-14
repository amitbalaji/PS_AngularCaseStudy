import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'banner',
    loadChildren: () =>
      import('./feature/banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'e-commerce',
    loadChildren: () =>
      import('./feature/e-commerce/e-commerce.module').then(
        (m) => m.ECommerceModule
      ),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./feature/timer/timer.module').then((m) => m.TimerModule),
  },
  {
    path: 'service-timer',
    loadChildren: () =>
      import('./feature/service-timer/service-timer.module').then(
        (m) => m.ServiceTimerModule
      ),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./feature/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: 'dynamic-box',
    loadChildren: () =>
      import('./feature/dynamic-box/dynamic-box.module').then(
        (m) => m.DynamicBoxModule
      ),
  },
  {
    path: 'chart-dashboard',
    loadChildren: () =>
      import('./feature/chart-dashboard/chart.dashboard.module').then(
        (m) => m.ChartDashboardModule
      ),
  },
  {
    path: 'user-registration',
    loadChildren: () =>
      import('./feature/user-registration/user-registration.module').then(
        (m) => m.UserRegistartionModule
      ),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
