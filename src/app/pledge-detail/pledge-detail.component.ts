import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PledgeService } from '../pledge.service';
import { Pledge } from '../pledge';


@Component({
  selector: 'app-pledge-detail',
  standalone: true,
  imports: [],
  templateUrl: './pledge-detail.component.html',
  styleUrl: './pledge-detail.component.css'
})
export class PledgeDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pledgeService = inject(PledgeService);
  pledge: Pledge | undefined;
  pledgeId = -1; 
  
  constructor(){
    this.pledgeId = Number(this.route.snapshot.params['id']);
    this.pledge = this.pledgeService.getPledgeById(this.pledgeId);
    console.log("route object:", this.route.snapshot.params['id']);
  }
}
