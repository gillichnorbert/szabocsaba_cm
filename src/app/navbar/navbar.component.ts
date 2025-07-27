import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
scrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection(event: Event, sectionId: string) {
  event.preventDefault();
  this.menuOpen = false;

  const el = document.getElementById(sectionId);
  if (el) {
    const yOffset = -70;  // például 70px helyet hagyunk felül
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

}
