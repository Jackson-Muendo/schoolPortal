import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuOpened = false;

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  closeMenu(): void {
    this.menuOpened = false;
  }

}
