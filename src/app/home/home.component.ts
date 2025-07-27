import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  statsVisible = false;

  @ViewChild('counterSection') counterSection!: ElementRef;

  counters = [
    { label: 'BULI ÉS RENDEZVÉNY', value: 500, current: 0, text: '+' },
    { label: 'ELÉGEDETT VENDÉG', value: 6000, current: 0, text: '+' }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.statsVisible) {
            this.statsVisible = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (this.counterSection) {
      observer.observe(this.counterSection.nativeElement);
    }
  }

  animateCounters() {
  this.counters.forEach(counter => {
    let start = 0;
    const end = counter.value;
    const steps = 50;
    const increment = Math.ceil(end / steps);
    const duration = 2000;
    const stepTime = Math.floor(duration / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        counter.current = end;
        clearInterval(timer);
      } else {
        counter.current = start;
      }
    }, stepTime);
  });
}

}
