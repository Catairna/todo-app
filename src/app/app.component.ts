import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatDialogModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(FormDialogComponent, {
      width: '250px',
      data: {},
    });
  }
}
