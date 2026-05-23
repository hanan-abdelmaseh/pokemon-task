import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Shared/home/home';
import { NavbarComponent } from './Shared/navbar-component/navbar-component';
import { Footer } from "./Shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon-task');
}
