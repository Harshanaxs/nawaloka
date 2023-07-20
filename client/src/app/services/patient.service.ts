import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import {
  GET_PATIENTS,
  CREATE_PATIENT,
  DELETE_PATIENT,
  UPDATE_PATIENT,
} from '../graphql.operations';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: any;
  private error: any;
  constructor(private _http: HttpClient, private apollo: Apollo) {}

  addPatient(input: any): Observable<any> {
    const payload = {
      name: 'hello bunny',
      age: 12,
      dob: Date.now(),
      gender: 'female',
      address: {
        street: 'ads',
        city: 'zxc',
        state: 'AP',
        zip: '123',
      },
    };

    console.log(input);
    return this.apollo.mutate({
      mutation: CREATE_PATIENT,

      variables: {
        input: input,
      },
    });
  }

  updatePatient(id: number, data: any): Observable<any> {
    // return this._http.put(`http://localhost:3000/Patients/${id}`, data);
    return this.apollo.mutate({
      mutation: UPDATE_PATIENT,
      refetchQueries: [{ query: GET_PATIENTS }],

      variables: {
        id: id,
        input: data,
      },
    });
  }

  getPatientList(): Observable<any> {
    const data = this.apollo.query({
      query: GET_PATIENTS,
      fetchPolicy: 'no-cache',
    });

    console.log(data);

    return data;
  }

  deletePatient(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/Patients/${id}`);

    return this.apollo.mutate({
      mutation: DELETE_PATIENT,

      variables: {
        id: id,
      },
    });
  }
}
