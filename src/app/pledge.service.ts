import { Injectable } from '@angular/core';
import { Pledge } from './pledge';
import { pledgesList } from './pledge';

@Injectable({
  providedIn: 'root'
})
export class PledgeService {

  protected pledgesList = pledgesList;
  url = 'http://localhost:3000/pledges';

  async getAllPledges(): Promise<Pledge[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getPledgeById(id: number): Promise<Pledge | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  
  constructor() { }
}
