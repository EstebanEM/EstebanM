import { Component } from '@angular/core';
type SectionType = 'Dibujos' | 'Manualidades' | 'Murales';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})



export class IndexComponent {

  sections: SectionType[] = [
    'Dibujos', 
    'Manualidades', 
    'Murales'
  ];
  currentSection = 0;
   animateInfo = false;

  images: Record<SectionType, string[]> = {
    Dibujos: [
      'https://i.pinimg.com/736x/2a/7b/87/2a7b87b2b3096891f7b3655a4a931d0c.jpg', 
      'https://i.pinimg.com/1200x/04/6f/b8/046fb8464d1afa8fff00fa6c51ddef26.jpg', 
      'https://i.pinimg.com/736x/b7/47/f6/b747f6d3a90be2701dea907cbb31162d.jpg',
      'https://i.pinimg.com/736x/97/bc/74/97bc748fc02d8c0aad198cd89ca37dc0.jpg',
      'https://i.pinimg.com/736x/55/a8/52/55a852ff2199d20c961eec14af9840bd.jpg',
      'https://i.pinimg.com/736x/68/42/68/68426894c16d7a120c4cb708efe85b43.jpg',
      'https://i.pinimg.com/736x/86/50/60/86506015c1564b001c99ae576adefb1d.jpg',
      'https://i.pinimg.com/736x/14/a9/f4/14a9f4b43e0a2fdac53a2cf9ccf6ad06.jpg',
      'https://i.pinimg.com/736x/42/a4/dc/42a4dcce17cf131604dc0214a73651ae.jpg',
      'https://i.pinimg.com/736x/fe/77/59/fe77591586dc43fe1f59e3bfa96e5301.jpg'
    ],
    Manualidades: [
      'https://i.pinimg.com/1200x/4b/1f/5c/4b1f5cbeda9889838c422eb44ca5ce52.jpg', 
      'https://i.pinimg.com/736x/99/7c/ae/997caec08b9b1302a2ca7b1861677d07.jpg', 
      'https://i.pinimg.com/736x/b2/6c/1f/b26c1f5f4af6dc1c6de0fff8c78d932d.jpg',
      'https://i.pinimg.com/736x/c4/2c/1b/c42c1b62e011f355423e309da561ef83.jpg',
      'https://i.pinimg.com/736x/56/3a/2a/563a2a8f8d63f79f9b642303f6e190ce.jpg'
    ],
    Murales: [
      'assets/img/cap.webp', 
      'https://i.pinimg.com/736x/b3/dc/ed/b3dcedaf2e0c8efccff252317f3eb2c7.jpg', 
      'https://i.pinimg.com/736x/9f/70/3b/9f703bedc8913126addc9685212e2c8d.jpg',
      'https://i.pinimg.com/736x/b2/47/e5/b247e5237749862b904f28c9bffeeab7.jpg',
      'https://i.pinimg.com/736x/44/7b/03/447b032653bb7a2519ecd3b4c0b1d844.jpg',
      'https://i.pinimg.com/736x/59/fa/5c/59fa5c86de0e640d811eaadae7afc26f.jpg',
      'https://i.pinimg.com/736x/0f/f0/d7/0ff0d7dd3ecf5f8eaa8ff2b21d2e7fdc.jpg'
    ]
  };

  nextSection() {
    this.resetInfoAnimation();
    this.currentSection = (this.currentSection + 1) % this.sections.length;
  }

  prevSection() {
    this.resetInfoAnimation();
    this.currentSection = (this.currentSection - 1 + this.sections.length) % this.sections.length;
  }

  resetInfoAnimation() {
    this.animateInfo = false;
    setTimeout(() => {
      this.animateInfo = true;
    }, 10);
  }

  rotateCards(section: SectionType) {
    const imgs = this.images[section];
    const first = imgs.shift();
    if (first) imgs.push(first);
  }
}
