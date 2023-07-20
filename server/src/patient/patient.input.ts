import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zip: string;
}

@InputType()
export class PatientInput {
  @Field()
  name: string;

  @Field()
  gender: string;

  @Field()
  dob: Date;

  @Field()
  age: number;

  @Field()
  address: AddressInput;
}
