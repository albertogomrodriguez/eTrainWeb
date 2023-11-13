// image-carousel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent {
  images = [
    '../../../../assets/img/carousel/edward-cisneros-_H6wpor9mjs-unsplash.png',
    '../../../../assets/img/carousel/irene-strong-v2aKnjMbP_k-unsplash.png',
    '../../../../assets/img/carousel/marya_volk-_RPAQq07Pt0-unsplash.png',
    '../../../../assets/img/carousel/vicky-hladynets-C8Ta0gwPbQg-unsplash.png',
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
}
