import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MouseClickRoutingModule } from './mouse-click-routing.module';
import {MouseClickListenerComponent} from "./mouse-click-listener/mouse-click-listener.component";


@NgModule({
  declarations: [
    MouseClickListenerComponent
  ],
  imports: [
    CommonModule,
    MouseClickRoutingModule
  ]
})
export class MouseClickModule { }
