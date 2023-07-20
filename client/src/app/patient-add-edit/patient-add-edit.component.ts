import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-add-edit',
  templateUrl: './patient-add-edit.component.html',
  styleUrls: ['./patient-add-edit.component.scss'],
})
export class PatientAddEditComponent implements OnInit {
  patientForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _patientService: PatientService,
    private _dialogRef: MatDialogRef<PatientAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.patientForm = this._fb.group({
      name: '',
      age: 0,
      dob: Date.now(),
      gender: '',
      address: this._fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      }),
    });
  }

  ngOnInit(): void {
    this.patientForm.patchValue(this.data);
  }

  onFormSubmit() {
    console.log(this.patientForm.value);
    if (this.patientForm.valid) {
      if (this.data) {
        console.log(this.data);
        this._patientService
          .updatePatient(this.data._id, this.patientForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Patient detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._patientService.addPatient(this.patientForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Patient added successfully');
            this._dialogRef.close(true);
            this._patientService.getPatientList();
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  addressFormGroup() {
    return this.patientForm.get('address')?.value;
  }
}
