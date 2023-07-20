import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientService } from './patient.service';
import { PatientResolver } from './patient.resolver';
import { Patient, PatientSchema } from './patient.model';

@Module({
  providers: [PatientService, PatientResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Patient.name,
        schema: PatientSchema,
      },
    ]),
  ],
})
export class PatientModule {}
