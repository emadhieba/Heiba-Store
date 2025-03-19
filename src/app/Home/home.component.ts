import { Component, AfterViewInit, OnInit } from '@angular/core';

// تأكد من تثبيت مكتبات Swiper و ScrollReveal في المشروع
// npm install swiper scrollreveal
import Swiper from 'swiper/bundle';
import type { SwiperOptions } from 'swiper/types';


import ScrollReveal from 'scrollreveal';
import { ProductsService } from '../Products/All_products/products.service';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports:[SharedModuleModule],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

adeddTowCart:boolean=false;
  Sale_product:any[]=[];

  constructor(private service:ProductsService)  {
    }

    ngOnInit(): void {
      this.getProductByCatogey();
      this.initializeMenu();
  this.initializeScrollReveal();
     
      
    }

    addToCart(item: any) {
      item.quantity = item.quantity || 1; // تعيين الكمية الافتراضية إذا لم تكن موجودة
      let cart: any[] = [];
      if ('cart' in localStorage) {
        cart = JSON.parse(localStorage.getItem('cart')!);
        const exist = cart.find(product => product.id === item.id);
        
        if (exist) {
          exist.quantity += 1;
          this.adeddTowCart=true;
        } else {
          cart.push(item);
        }
      } else {
        cart.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.showCustomToast('Item added to cart!');

    }
  getProductByCatogey(){
    
    this.service.getProductsCategory(2).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        this.Sale_product = res; 

      } else {
        console.error("Invalid API response: ", res);
       
      }
    });
  }
  private initializeMenu(): void {
    const menuBtn = document.getElementById('menu-btn') as HTMLElement | null;
    const navLinks = document.getElementById('nav-links') as HTMLElement | null;
    const menuBtnIcon = menuBtn?.querySelector('i') as HTMLElement | null;

    if (menuBtn && navLinks && menuBtnIcon) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const isOpen = navLinks.classList.contains('open');
        menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
      });

      navLinks.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtnIcon.setAttribute('class', 'ri-menu-line');
      });
    }
  }

  private initializeScrollReveal(): void {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    const sr = ScrollReveal();
    sr.reveal('.header__image img', { ...scrollRevealOption, origin: 'right' });
    sr.reveal('.header__content h1', { ...scrollRevealOption, delay: 500 });
    sr.reveal('.header__content p', { ...scrollRevealOption, delay: 1000 });
    sr.reveal('.header__image__content', { duration: 1000, delay: 1500 });
    sr.reveal('.product__image img', { ...scrollRevealOption, origin: 'left' });
    sr.reveal('.product__card', { ...scrollRevealOption, delay: 500, interval: 500 });
  }
  showCustomToast(message: string) {
    const toast = document.getElementById('customToast');
    if (toast) {
      toast.textContent = message;
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 3000);
    }
  }
  // private initializeSwiper(): void {
  //   const swiperConfig: SwiperOptions = {
  //     loop: true,
  //     effect: 'coverflow',
  //     grabCursor: true,
  //     centeredSlides: true,
  //     slidesPerView: 'auto',
  //     coverflowEffect: {
  //       rotate: 0,
  //       depth: 250,
  //       modifier: 1,
  //       scale: 0.75,
  //       slideShadows: false,
  //       stretch: -100,
  //     },
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //   };

  //   new Swiper('.swiper', swiperConfig);
  // }  
}
