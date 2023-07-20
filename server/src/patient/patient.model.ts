import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Address {
  @Prop()
  @Field()
  street: string;

  @Prop()
  @Field()
  city: string;

  @Prop()
  @Field()
  state: string;

  @Prop()
  @Field()
  zip: string;
}

@ObjectType()
@Schema()
export class Patient {
  @Field(() => String)
  _id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  dob: Date;

  @Field()
  @Prop()
  gender: string;

  @Field()
  @Prop()
  age: number;

  @Field(() => Address)
  @Prop({ type: Address })
  address: Address;
}

export type PatientDocument = Patient & Document;

export const PatientSchema = SchemaFactory.createForClass(Patient);
