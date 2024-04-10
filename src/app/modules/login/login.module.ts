import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatHint,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    LoginRoutingModule,
    CommonModule
  ]
})
export class LoginModule { }
