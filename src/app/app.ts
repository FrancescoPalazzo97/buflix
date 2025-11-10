import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpServer } from './http-server/http-server';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpServer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('buflix');
}
