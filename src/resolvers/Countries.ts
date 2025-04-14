import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import {
  Country,
  CountryCreateInput,
  CountryUpdateInput,
} from "../entities/Country";
import { validate } from "class-validator";

@Resolver()
export class CountriesResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async countryById(@Arg("id", () => ID) id: number): Promise<Country | null> {
    return await Country.findOne({
      where: { id },
    });
  }

  @Query(() => Country, { nullable: true })
  async countryByCode(@Arg("code") code: string): Promise<Country | null> {
    return await Country.findOne({
      where: { code },
    });
  }

  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return await Country.find({
      where: { continentCode },
    });
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("data", () => CountryCreateInput) data: CountryCreateInput
  ): Promise<Country> {
    const newCountry = new Country();
    Object.assign(newCountry, data);

    const errors = await validate(newCountry);
    if (errors.length > 0) {
      throw new Error(`Validation error: ${JSON.stringify(errors)}`);
    } else {
      await newCountry.save();
      return newCountry;
    }
  }
}
