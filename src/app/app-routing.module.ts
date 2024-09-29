import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'booking',component:BookingComponent},
  {path:'contact',component:ContactComponent},
  {path:'learn-more',component:LearnMoreComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'refund',component:RefundComponent},
  {path:'service',component:ServiceComponent},
  {path:'team',component:TeamComponent},
  {path:'terms',component:TermsComponent},
  {path:'testimonial',component:TestimonialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
