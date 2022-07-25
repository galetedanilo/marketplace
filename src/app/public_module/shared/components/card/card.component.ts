import { Component, Input } from "@angular/core";
import { CardResponseInterface } from "./interfaces/card-response.interface";

@Component({
  selector: 'app-card[card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: CardResponseInterface;
}
