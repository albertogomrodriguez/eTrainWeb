import { Component } from '@angular/core';

@Component({
  selector: 'app-planes-page',
  templateUrl: './planes-page.component.html',
  styleUrls: ['./planes-page.component.css'],
})
export class PlanesPageComponent {
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
