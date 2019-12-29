import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component:SignInComponent},
  { path: 'post', component:PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }
