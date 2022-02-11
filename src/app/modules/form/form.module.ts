import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    FormComponent
  ],
    imports: [
        CommonModule,
        FormRoutingModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
})
export class FormModule { }
