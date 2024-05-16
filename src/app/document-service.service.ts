import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private baseUrl = 'http://8080/api/user/upload';

  constructor(private http: HttpClient) { }

  uploadDocument(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
}
