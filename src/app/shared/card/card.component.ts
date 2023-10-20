import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// 
  // se nao passar nada vai ficar como primary
  @Input() variant: 'primary' | 'secondary' = 'primary'

}
