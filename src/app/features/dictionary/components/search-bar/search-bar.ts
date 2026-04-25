import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar implements OnInit {

  searchControl = new FormControl('');

  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>;

  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), //clave
      map(value => value?.trim() ?? ''),
      distinctUntilChanged()
    ).subscribe(value => {

    // If the input is empty or has only one character, emit an empty string to clear results
    if (value.length === 1 || value.length === 0) {
      this.search.emit('');
      return;
    }
    // Emit the search term to the parent component
    this.search.emit(value);
    });

  }

  onEnter() {
    // Close the keyboard on mobile devices after pressing Enter
    this.input.nativeElement.blur();
  }
}
