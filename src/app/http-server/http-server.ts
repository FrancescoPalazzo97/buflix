import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-server',
  imports: [],
  templateUrl: './http-server.html',
  styleUrl: './http-server.css',
})
export class HttpServer {
  http = inject(HttpClient);
}
