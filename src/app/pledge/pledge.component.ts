import { Component, Input } from '@angular/core';
import { Pledge } from '../pledge';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pledge',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './pledge.component.html',
  styleUrl: './pledge.component.css'
})
export class PledgeComponent {
 @Input() pledge!: Pledge;

}
