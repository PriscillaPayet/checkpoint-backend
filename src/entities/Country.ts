import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { IsOptional, Length } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
@Unique(["code"])
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  @Length(2, 50)
  code!: string;

  @Column()
  @Field()
  @Length(2, 100)
  name!: string;

  @Column()
  @Field()
  emoji!: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  continentCode?: string;
}

@InputType()
export class CountryCreateInput {
  @Field()
  @Length(2, 50)
  code!: string;

  @Field()
  @Length(2, 100)
  name!: string;

  @Field()
  emoji!: string;

  @Field({ nullable: true })
  @IsOptional()
  continentCode?: string;
}

@InputType()
export class CountryUpdateInput {
  @Field({ nullable: true })
  @Length(2, 50)
  @IsOptional()
  code?: string;

  @Field({ nullable: true })
  @Length(2, 100)
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  emoji?: string;

  @Field({ nullable: true })
  @IsOptional()
  continentCode?: string;
}
