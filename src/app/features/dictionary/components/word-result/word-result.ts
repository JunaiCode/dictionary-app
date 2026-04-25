import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../../../../core/models/word.model';
import { MeaningsList } from '../meanings-list/meanings-list';
import { WordHeader } from '../word-header/word-header';

@Component({
  selector: 'app-word-result',
  standalone: true,
  imports: [CommonModule, WordHeader, MeaningsList],
  templateUrl: './word-result.html',
  styleUrl: './word-result.css'
})
export class WordResult {
  @Input() word!: Word[];
}
