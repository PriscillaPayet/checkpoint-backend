import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Length } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@Entity()
@ObjectType() //pour la lecture d'une ad
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

  @Column()
  @Field()
  @Length(2, 50)
  continentCode!: string;
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

  @Field()
  @Length(2, 50)
  continentCode!: string;
}

@InputType()
export class CountryUpdateInput {
  @Field({ nullable: true })
  @Length(2, 50)
  code?: string;

  @Field({ nullable: true })
  @Length(2, 100)
  name?: string;

  @Field({ nullable: true })
  emoji?: string;

  @Field({ nullable: true })
  @Length(2, 50)
  continentCode?: string;
}
