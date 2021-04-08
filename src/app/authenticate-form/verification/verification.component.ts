import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/services/user.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  verificationForm: FormGroup;
  @Output() register = new EventEmitter<boolean>();
  @Input() userData: User;
  showResend: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router,
    private cacheService: CacheService
  ) {}

  ngOnInit(): void {
    this.verificationForm = this.fb.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
    if (document.getElementById('timer')) {
      // Timer for 1 minute
      let counterSec = 60;
      const interval = setInterval(() => {
        counterSec--;
        if (counterSec <= 0) {
          clearInterval(interval);
          document.getElementById('timer').innerHTML = '<span>00:00</span>';
          return;
        } else {
          document.getElementById('time').innerHTML =
            '<span>' + counterSec + '</span>';
        }
      }, 1000);
    }

    setTimeout(() => {
      this.showResend = true;
    }, 60000);
  }

  onVerify() {
    this.cacheService.setCache('userName', this.userData.userName);
    this.userService.userArray.push(this.userData);
    this.route.navigateByUrl('users');
  }

  resend() {
    this.verificationForm.reset();
    this.showResend = false;
    document.getElementById('timer').innerHTML = '00:<span id="time">60</span>';
    let counterSec = 60;
    const interval = setInterval(() => {
      counterSec--;
      if (counterSec <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = '<span>00:00</span>';
        return;
      } else {
        document.getElementById('time').innerHTML =
          '<span>' + counterSec + '</span>';
      }
    }, 1000);
  }
}
