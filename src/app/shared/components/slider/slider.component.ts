import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @ViewChild('slider') private slider: ElementRef;

  private isDragging: boolean = false;
  private startX: number;
  private startScrollLeft: number;

  constructor(private renderer: Renderer2) { }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startScrollLeft = this.slider.nativeElement.scrollLeft;
  }

  onMouseUp() {
    this.isDragging = false;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const moveX = event.clientX - this.startX;
      const newScrollLeft = this.startScrollLeft - moveX;

      this.applyTransform(newScrollLeft);
    }
  }

  private applyTransform(scrollLeft: number) {
    const items = this.slider.nativeElement.querySelectorAll('.item');
    items.forEach((item: any) => {
      this.renderer.setStyle(item, 'transform', `translateX(${scrollLeft}px)`);
    });
  }
}
