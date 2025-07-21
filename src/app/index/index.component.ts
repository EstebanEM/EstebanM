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

  images: Record<SectionType, string[]> = {
    Dibujos: ['https://i.pinimg.com/736x/2a/7b/87/2a7b87b2b3096891f7b3655a4a931d0c.jpg', 'https://i.pinimg.com/1200x/04/6f/b8/046fb8464d1afa8fff00fa6c51ddef26.jpg', 'https://i.pinimg.com/736x/b7/47/f6/b747f6d3a90be2701dea907cbb31162d.jpg'],
    Manualidades: ['https://i.pinimg.com/1200x/4b/1f/5c/4b1f5cbeda9889838c422eb44ca5ce52.jpg', 'https://i.pinimg.com/736x/99/7c/ae/997caec08b9b1302a2ca7b1861677d07.jpg', 'https://i.pinimg.com/736x/b2/6c/1f/b26c1f5f4af6dc1c6de0fff8c78d932d.jpg'],
    Murales: ['assets/img/cap.webp', 'https://i.pinimg.com/736x/b3/dc/ed/b3dcedaf2e0c8efccff252317f3eb2c7.jpg', 'https://i.pinimg.com/736x/9f/70/3b/9f703bedc8913126addc9685212e2c8d.jpg']
  };

  rotateCards(section: SectionType) {
    const imgs = this.images[section];
    const first = imgs.shift();
    if (first) imgs.push(first);
  }

  nextSection() {
    this.currentSection = (this.currentSection + 1) % this.sections.length;
  }

  prevSection() {
    this.currentSection = (this.currentSection - 1 + this.sections.length) % this.sections.length;
  }
}
