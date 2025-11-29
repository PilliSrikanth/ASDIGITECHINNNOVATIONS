import { Component, AfterViewInit } from '@angular/core';
declare var CountUp: any;

declare var $: any; // Allow usage of jQuery

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('.owl-carousel.service-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    this.initCounters();
  }

  private initCounters(): void {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counterElement) => {
      // Use optional chaining and provide a fallback value of '0'
      const countTo = parseInt(counterElement.getAttribute('data-toggle') ?? '0', 10);
      const countUp = new CountUp(counterElement, countTo);
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }

}
