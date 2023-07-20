import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PatientService } from './patient.service';
import { PatientInput } from './patient.input';
import { Patient } from './patient.entity';
import { PatientUpdateInput } from './patient-update.input';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private readonly patientService: PatientService) {}

  @Query(() => [Patient])
  async patients(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Query(() => Patient)
  async patient(@Args('id', { type: () => ID }) id: string): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Mutation(() => Patient)
  async createPatient(@Args('input') input: PatientInput): Promise<Patient> {
    console.log(input);
    return this.patientService.create(input);
  }

  @Mutation(() => Patient)
  async updatePatient(
    @Args('id') id: string,
    @Args('input') input: PatientUpdateInput,
  ): Promise<Patient> {
    return this.patientService.update(id, input);
  }

  @Mutation(() => Patient)
  async deletePatient(@Args('id') id: string): Promise<Patient> {
    return this.patientService.delete(id);
  }
}
