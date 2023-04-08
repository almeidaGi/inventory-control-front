import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../service/service.service';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule

  ],
  providers: [
    ServiceService
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
