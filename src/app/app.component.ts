import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { TmplAstBlockNode } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatDialogModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  tasks: { headline: string; description: string; isComplete: false }[] = [];
  selectedTask: {
    headline: string;
    description: string;
    isComplete: boolean;
  } | null = null;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '250px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tasks.push(result);
      }
    });
  }
  onSelect(task: {
    headline: string;
    description: string;
    isComplete: boolean;
  }): void {
    this.selectedTask = task;
  }
  taskStateButtonText = 'Mark as done / undone';

  toggleTaskState(task: {
    headline: string;
    description: string;
    isComplete: boolean;
  }): void {
    task.isComplete = !task.isComplete;
    console.log('Task state changed');
    console.log(task);
  }

  removeTask() {
    console.log('Task removed');
  }
}
