import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @ViewChild('slider') slider: ElementRef;

  private isDragging: boolean = false;
  private startPosition: number;
  private startScrollLeft: number;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startPosition = event.clientX;
    this.startScrollLeft = this.slider.nativeElement.scrollLeft;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dragDistance = event.clientX - this.startPosition;
      const newPosition = this.startScrollLeft - dragDistance;
      this.slider.nativeElement.scrollLeft = newPosition;
    }
  }
}
