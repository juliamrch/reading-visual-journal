import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '@example-app/books/models';

@Component({
  selector: 'bc-book-detail',
  template: `
    <mat-card *ngIf="book">
      <mat-card-title-group>
        <mat-card-title>{{ title }}</mat-card-title>
        <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
        <img mat-card-sm-image *ngIf="thumbnail" [src]="thumbnail" />
      </mat-card-title-group>
      <mat-card-content>
        <p [innerHtml]="description"></p>
      </mat-card-content>
      <mat-card-footer class="footer">
        <bc-book-authors [book]="book"></bc-book-authors>
      </mat-card-footer>
      <mat-card-actions align="start">
        <button
          mat-raised-button
          color="warn"
          *ngIf="inCollection"
          (click)="remove.emit(book)"
        >
          Remove Book from Collection
        </button>

        <button
          mat-raised-button
          color="primary"
          *ngIf="!inCollection"
          (click)="add.emit(book)"
        >
          Add Book to Collection
        </button>
        <button
          mat-raised-button
          color="primary"
          *ngIf="inCollection"
          [routerLink]="['/books', book.id, 'journal']"
          class="spaced-button"
        >
          Journal
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 4.5rem 0;
      }

      mat-card {
        padding: 1rem;
        max-width: 600px;
      }

      img {
        width: 60px;
        min-width: 60px;
        margin-left: 5px;
      }

      mat-card-content {
        padding: 0;
        margin: 1rem 0;
      }

      mat-card-actions {
        justify-content: center;
      }
    `,
  ],
  standalone: false,
})
export class BookDetailComponent {
  /**
   * Presentational components receive data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */
  @Input() book!: Book;
  @Input() inCollection!: boolean;
  @Input() hasJournal!: boolean;
  @Output() add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();

  /**
   * Tip: Utilize getters to keep templates clean
   */
  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail() {
    return (
      this.book.volumeInfo.imageLinks &&
      this.book.volumeInfo.imageLinks.smallThumbnail &&
      this.book.volumeInfo.imageLinks.smallThumbnail.replace('http:', '')
    );
  }
}
