import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { MatButtonModule, MatInputModule, MatIconModule, MatRippleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
