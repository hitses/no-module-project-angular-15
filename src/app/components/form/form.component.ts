import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Message } from './interfaces/chatCompletionResponse.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  chatCompletion$!: Observable<Message>;

  constructor(private readonly apiService: ApiService) {
    this.apiService
      .generateResponse('¿Qué es Angular?')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
