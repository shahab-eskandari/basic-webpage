import { Component, inject } from '@angular/core';
import { PledgeComponent } from '../pledge/pledge.component';
import { Pledge } from '../pledge';
import { CommonModule } from '@angular/common';
import { PledgeService } from '../pledge.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PledgeComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pledgesList: Pledge[]=[];
  pledgeService: PledgeService = inject(PledgeService);
  filteredPledgeList: Pledge[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredPledgeList = this.pledgesList;
      return;
    }
  
    this.filteredPledgeList = this.pledgesList.filter(
      pledge => pledge?.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor(){
    this.pledgeService.getAllPledges().then((pledgesList: Pledge[])=>{
      this.pledgesList = pledgesList;
      this.filteredPledgeList = pledgesList;
    })
  }
}
