import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryService } from '../../../../core/services/dictionary.service';
import { Word } from '../../../../core/models/word.model';
import { SearchBar } from '../../components/search-bar/search-bar';
import { WordResult } from '../../components/word-result/word-result';

@Component({
  selector: 'app-dictionary-page',
  standalone: true,
  imports: [CommonModule, SearchBar, WordResult],
  templateUrl: './dictionary-page.html',
  styleUrl: './dictionary-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DictionaryPage {

  wordData = signal<Word[] | null>(null);
  error = signal(false);
  loading = signal(false);

  constructor(private dictionaryService: DictionaryService) {}

  onSearch(word: string) {

    if (!word || word.length === 1) {
    this.wordData.set(null);
    this.error.set(false);
    this.loading.set(false);
    return;
  }
    this.loading.set(true);
    this.error.set(false);
    this.wordData.set(null);

    this.dictionaryService.getWord(word).subscribe({
      next: (data) => {
        this.wordData.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
        this.wordData.set(null);
      }
    });
  }
}
