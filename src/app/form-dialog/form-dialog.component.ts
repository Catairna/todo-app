import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css',
})
export class FormDialogComponent {
  taskForm = new FormGroup({
    headline: new FormControl(''),
    description: new FormControl(''),
  });
  /*handleSubmit() {
    alert(
      this.taskForm.value.headline + ' | ' + this.taskForm.value.description
    );
  }*/
  constructor(private dialogRef: MatDialogRef<FormDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
