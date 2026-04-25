import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeaningItem } from '../meaning-item/meaning-item';

@Component({
  selector: 'app-meaning-list',
  standalone: true,
  imports: [CommonModule, MeaningItem],
  templateUrl: './meanings-list.html',
  styleUrl: './meanings-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeaningsList {
  @Input() meanings!: any[];
}
