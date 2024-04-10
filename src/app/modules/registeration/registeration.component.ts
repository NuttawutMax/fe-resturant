import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from './registeration.service';
import { Registeration } from './registeration.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.scss'
})
export class RegisterationComponent {
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    displayName: new FormControl()
  });

  constructor(
    private registerationService: RegisterationService,
    private router: Router
  ) { }

  register() {
    this.registerationService.registerMember(this.formGroup.value as Registeration).pipe().subscribe(result => {
      if (result) {
        alert('Created!');
        this.router.navigate(['/login']);
      }
    });
  }

}
