import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bigmacprice-fe';
  showLogin: boolean = true;
  showInserSection: boolean = false;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ){}

  ngOnInit(): void {
    this.showLogin = this.isUserLogged() ? false : true;
    this.showInserSection = this.showLogin ? false : true;
  }

  private isUserLogged(): boolean{
    return !!sessionStorage.getItem('user');
  }

  login(user: any){
    this.loginService.login(user).subscribe({
      next: () => {
        this.showLogin = false;
        this.showInserSection = true;
        sessionStorage.setItem('user', user.userName)
      },
      error: () => {
        this.showLogin = true;
        this.showInserSection = false;
        alert('Invalid credentials!');
      }
    })
  }

  add(product: any){
    this.http.post('http://localhost:3000/api/hamburgers/add', {
      name: product.itemName,
      price: product.itemPrice
    }).subscribe({
      next: () => {
        alert('Item added!');
      },
      error: err => alert('Error adding item')
    });
  }
}
