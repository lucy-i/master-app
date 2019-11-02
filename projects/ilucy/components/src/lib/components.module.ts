import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
