import { Injectable } from '@angular/core';
import { Pledge } from './pledge';
import { pledgesList } from './pledge';

@Injectable({
  providedIn: 'root'
})
export class PledgeService {

  protected pledgesList = pledgesList;

  getAllPledges(): Pledge[] {
    return this.pledgesList;
  }
  
  getPledgeById(id: number): Pledge | undefined {
    return this.pledgesList.find(pledge => pledge.id === id);
  }
  
  constructor() { }
}
