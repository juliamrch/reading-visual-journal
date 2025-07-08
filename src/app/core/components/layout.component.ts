import { Component } from '@angular/core';

@Component({
  selector: 'bc-layout',
  template: `
    <mat-sidenav-container fullscreen>
      <ng-content></ng-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      mat-sidenav-container {
      }
    `,
  ],
  standalone: false,
})
export class LayoutComponent {}
