import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MouseClickListenerComponent} from "./mouse-click-listener/mouse-click-listener.component";

const routes: Routes = [
  {path: '', component: MouseClickListenerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MouseClickRoutingModule { }
