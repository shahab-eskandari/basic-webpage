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
   
  constructor(){
    const pledgeId = parseInt(this.route.snapshot.params['id'],10);
    this.pledgeService.getPledgeById(pledgeId).then((pledge:Pledge|undefined)=>{
      this.pledge = pledge;
    });
    console.log("route object:", this.route.snapshot.params['id']);
  }
}
