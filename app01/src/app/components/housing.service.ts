import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  url = 'http://localhost:3000/locations';

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json();
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`First Name: ${firstName} - Last Name: ${lastName} - Email: ${email}`);
  }
}
