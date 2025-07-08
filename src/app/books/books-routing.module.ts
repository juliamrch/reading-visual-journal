import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalEditorComponent } from '../journal-editor/journal-editor.component';

import {
  CollectionPageComponent,
  FindBookPageComponent,
  ViewBookPageComponent,
} from '@example-app/books/containers';
import { bookExistsGuard } from '@example-app/books/guards';

export const routes: Routes = [
  {
    path: ':id/journal',
    component: JournalEditorComponent,
    data: { title: 'Journal Editor' },
  },
  {
    path: 'find',
    component: FindBookPageComponent,
    data: { title: 'Find book' },
  },
  {
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [bookExistsGuard],
    data: { title: 'Book details' },
  },
  {
    path: '',
    component: CollectionPageComponent,
    data: { title: 'Collection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
