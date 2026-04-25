import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../../../../core/models/word.model';
import { AudioPlayer } from '../../../../shared/components/audio-player/audio-player';

@Component({
  selector: 'app-word-header',
  standalone: true,
  imports: [CommonModule, AudioPlayer],
  templateUrl: './word-header.html',
  styleUrl: './word-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordHeader {

  @Input() word!: Word;

  get audioUrl(): string | undefined {
    return this.word.phonetics?.find(p => p.audio)?.audio;
  }
}
