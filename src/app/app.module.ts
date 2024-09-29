import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundComponent } from './refund/refund.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestimonialComponent,
    FooterComponent,
    ContactComponent,
    BookingComponent,
    AboutComponent,
    LearnMoreComponent,
    PrivacyPolicyComponent,
    RefundComponent,
    ServiceComponent,
    TeamComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
