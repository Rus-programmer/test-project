import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./modules/main-page/main-page/main-page.component";

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'form', loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule) },
  { path: 'mouse-click', loadChildren: () => import('./modules/mouse-click/mouse-click.module').then(m => m.MouseClickModule) },
  { path: 'timer', loadChildren: () => import('./modules/timer/timer.module').then(m => m.TimerModule) },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
