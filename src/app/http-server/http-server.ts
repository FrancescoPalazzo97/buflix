import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { MediaItem, TmdbResponse } from '../../models/api.types';

@Component({
  selector: 'app-http-server',
  imports: [],
  templateUrl: './http-server.html',
  styleUrl: './http-server.css',
})
export class HttpServer {
  http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private readonly apiKey = environment.apiKey;
  private readonly language = environment.language;
  private readonly trendingAllUrl = `${this.apiUrl}/trending/all/day?api_key=${this.apiKey}&${this.language}`;

  trendingAll = signal<MediaItem[]>([]);

  getTrendingsAll() {
    this.http.get<TmdbResponse>(this.trendingAllUrl)
      .subscribe(res => this.trendingAll.set(res.results))
  }

  ngOnInit() {
    this.getTrendingsAll();
  }
}
