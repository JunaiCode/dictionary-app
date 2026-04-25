import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meaning-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meaning-item.html',
  styleUrl: './meaning-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeaningItem {
  @Input() meaning: any;
}
