import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Word } from '../models/word.model';

@Injectable({ providedIn: 'root' })
export class DictionaryService {

  private baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  constructor(private http: HttpClient) {}

  getWord(word: string): Observable<Word[]> {
    const key = word.toLowerCase();
    return this.http.get<Word[]>(`${this.baseUrl}/${key}`);
  }
}
