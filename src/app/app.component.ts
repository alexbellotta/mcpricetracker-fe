import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigmacprice-fe';
  loggedIn: boolean = false;
  username: string = '';
  password: string = '';
  itemName: string = '';
  itemPrice: number | null = 0;

  constructor(private http: HttpClient){}

  login(){
    this.http.post(
      'http://localhost:3000/api/auth/login',
      {
        username: this.username,
        password: this.password
      }
    ).subscribe({
      next: () => this.loggedIn = true,
      error: () => alert('Invalid credentials!')
    })
  }

  add(){
    this.http.post('http://localhost:3000/api/hamburgers/add', {
      name: this.itemName,
      price: this.itemPrice
    }).subscribe({
      next: () => {
        alert('Item added!');
        this.itemName = '';
        this.itemPrice = null;
      },
      error: err => alert('Error adding item')
    });
  }
}
