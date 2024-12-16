import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css',
})
export class FormDialogComponent {
  taskForm = new FormGroup({
    headline: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  constructor(private dialogRef: MatDialogRef<FormDialogComponent>) {}

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.dialogRef.close(this.taskForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
