import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-player.html',
  styleUrl: './audio-player.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioPlayer {

  @Input() audioUrl?: string;

  isPlaying = false;

  private audio?: HTMLAudioElement;

  play() {
  if (!this.audioUrl) return;


  this.isPlaying = true;


  if (this.audio) {
    this.audio.pause();
  }

  this.audio = new Audio(this.audioUrl);
  this.audio.play();

  this.audio.onended = () => this.isPlaying = false;

}
}
