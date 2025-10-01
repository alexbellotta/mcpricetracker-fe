import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() showLogin: boolean = false;
  @Output() user: EventEmitter<any> = new EventEmitter<any>();
  username: string = '';
  password: string = '';

  login(){
    const user = {
      userName: this.username,
      password: this.password
    }
    this.user.emit(user);
  }
}
