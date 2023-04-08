import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { ListComponent } from './list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
