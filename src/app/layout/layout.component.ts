import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import {SetupDateComponent} from "../setup-date/setup-date.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, SetupDateComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
