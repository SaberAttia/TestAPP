import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = environment.API_URL;
  constructor(private http: HttpClient) { }

  loadTopMenu() {
    return this.http.get(this.url + `layout/loadtopmenu`);
  }
}
