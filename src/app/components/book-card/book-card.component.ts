import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  imgUrl = input('', {alias: 'image-url'})
  title = input('', {alias: 'book-title'});
}
