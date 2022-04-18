import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { FormComponent } from './contact/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BioComponent } from './about/bio/bio.component';
import { BlogComponent } from './home/blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HometownComponent } from './home/hometown/hometown.component';
import { InterestsComponent } from './about/interests/interests.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FormComponent,
    BioComponent,
    BlogComponent,
    FooterComponent,
    HometownComponent,
    InterestsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
