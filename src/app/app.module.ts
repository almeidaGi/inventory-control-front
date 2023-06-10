import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './shared/components/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListModule } from './shared/components/list/list.module';
import { HelpComponent } from './shared/components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    ListModule,   
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastrModule.forRoot(), 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
