import { Component, OnInit, Renderer2 } from '@angular/core';
import WOW from 'wowjs'; // Import WOW.js
declare var $: any; // Declare jQuery


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.initSpinner();
    this.initWOW();
    this.initStickyNavbar();
    this.initDropdownHover();
    this.initBackToTop();
    this.initDateTimePicker();
    this.initModalVideo();
    this.initCarousels();
  }

  initSpinner() {
    setTimeout(() => {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  }

  initWOW() {
    new WOW().init();
  }

  initStickyNavbar() {
    $(window).scroll(() => {
      if ($(window).scrollTop() > 90) {
        $('.nav-bar').addClass('sticky-top shadow');
      } else {
        $('.nav-bar').removeClass('sticky-top shadow');
      }
    });
  }

  initDropdownHover() {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
          (event: { currentTarget: any; }) => { // Use arrow function
            const $this = $(event.currentTarget); // Use event.currentTarget
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          (event: { currentTarget: any; }) => { // Use arrow function
            const $this = $(event.currentTarget); // Use event.currentTarget
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  }

  initBackToTop() {
    $(window).scroll(() => {
      if ($(window).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  }

  initDateTimePicker() {
    $('.date').datetimepicker({ format: 'L' });
    $('.time').datetimepicker({ format: 'LT' });
  }

  initModalVideo() {
    let $videoSrc: string; // Declare the type as string
    $('.btn-play').click((event: { currentTarget: any; }) => { // Use arrow function
      $videoSrc = $(event.currentTarget).data("src"); // Use event.currentTarget
    });

    $('#videoModal').on('shown.bs.modal', () => {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    $('#videoModal').on('hide.bs.modal', () => {
      $("#video").attr('src', $videoSrc);
    });
  }

  initCarousels() {
    $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: false,
      loop: true,
      /*nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
      ]*/
    });


    $(".service-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 0,
      dots: true,
      loop: true,
     
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 2 },
        1200: { items: 3 }
      }
    });

    $('.owl-carousel').owlCarousel({
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
  }
  initOwlCarousel() {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      dots: true,
      loop: true,
      /*nav: false,*/
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 2 },
        1200: { items: 3 }
      }
    });
  }

  ngAfterViewInit(): void {
    $('.owl-carousel.service-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
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
    new WOW.WOW().init();
    this.initCarousels();
  }
}
