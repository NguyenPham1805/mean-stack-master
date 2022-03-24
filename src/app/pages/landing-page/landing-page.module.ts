import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingPageRoutingModule } from './landing-page-routing-module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class LandingPageModule {}
