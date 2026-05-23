import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [  FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchValue = '';

  onSearch(){
    this.search.emit(this.searchValue);
  }
}
