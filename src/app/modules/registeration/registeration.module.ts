import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration.component';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterationComponent],
  imports: [
    RegisterationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatLabel,
    MatHint,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegisterationModule { }
