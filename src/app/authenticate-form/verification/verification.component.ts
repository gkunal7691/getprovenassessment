import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  verificationForm: FormGroup;
  @Output() register = new EventEmitter<boolean>();
  showResend: boolean;
  showOtp: boolean;
  showView: boolean;
  diableView: boolean;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.verificationForm = this.fb.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }
  onVerify() {
    this.showOtp = true;
    this.showView = true;
    this.showResend = true;
    setTimeout(() => {
      this.showResend = false;
    }, 300000);
    let counterSec = 60;
    let counterMin = 5;
    const minInterval = setInterval(() => {
      counterMin--;
      if (counterMin <= 0) {
        clearInterval(minInterval);
        document.getElementById('timer').innerHTML = '<span>00:00</span>';
      } else {
        document.getElementById('min').innerHTML =
          '<span>' + counterMin + '</span>';
      }
    }, 60000);
    const interval = setInterval(() => {
      counterSec--;
      if (counterSec <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = '<span>00:00</span>';
        return;
      } else {
        document.getElementById('sec').innerHTML =
          '<span>' + counterSec + '</span>';
      }
    }, 1000);

    // document.getElementById('timer').innerHTML = 5 + ':' + 60;
    // this.startTimer();
  }

  // startTimer() {
  //   const presentTime = document.getElementById('timer').innerHTML;
  //   let timeArray: any;
  //   timeArray = presentTime.split(/[:]+/);
  //   let min = timeArray[0];
  //   const sec = this.checkSecond(timeArray[1] - 1);
  //   if (sec === 59) {
  //     min = min - 1;
  //   }
  //   document.getElementById('timer').innerHTML = min + ':' + sec;
  //   setTimeout(this.startTimer, 1000);
  // }

  // checkSecond(sec: any) {
  //   console.log(sec)
  //   if (sec < 10 && sec >= 0) {
  //     sec = '0' + sec;
  //   } // add zero in front of numbers < 10
  //   if (sec < 0) {
  //     sec = '59';
  //   }
  //   return sec;
  // }

  resend() {
    this.showResend = false;
  }
}
