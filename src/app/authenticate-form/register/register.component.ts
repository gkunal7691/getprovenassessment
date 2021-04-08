import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  @Output() register = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private cacheService: CacheService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      age: [
        '',
        [
          Validators.required,
          Validators.min(18),
          Validators.max(60),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      country: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^[1-9]\d{9}$/),
        ],
      ],
    });
  }

  onRegisterClick() {
    this.register.emit(this.registerForm.value);
  }
}
