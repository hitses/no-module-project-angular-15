import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ChatCompletion,
  Message,
} from './interfaces/chatCompletionResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  generateResponse(prompt: string): Observable<Message> {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    };

    return this.http
      .post<ChatCompletion>(this.apiUrl, body)
      .pipe(map((res: ChatCompletion) => res.choices[0].message));
  }
}
