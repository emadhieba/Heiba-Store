import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:false
})

export class HeaderComponent {
 constructor(private router: Router){}
  logout() {
    localStorage.clear(); // مسح جميع البيانات من LocalStorage
    this.router.navigate(['/login']); // توجيه المستخدم إلى صفحة تسجيل الدخول
  }
}
