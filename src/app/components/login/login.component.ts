import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @Input() showLogin: boolean = false;
  @Output() user: EventEmitter<any> = new EventEmitter<any>();
  username: string = '';
  password: string = '';
  showLoginForm: boolean = true;
  showRegisterForm: boolean = false;

  ngOnInit(): void {
    this.showLoginForm = true;
  }

  login(){
    const user = {
      userName: this.username,
      password: this.password
    }
    this.user.emit(user);
  }

  goToRegister(){
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }
}
