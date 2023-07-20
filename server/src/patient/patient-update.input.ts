import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PatientInput } from './patient.input';

@InputType()
export class PatientUpdateInput extends PartialType(PatientInput) {}
