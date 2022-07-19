import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id!: string
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() amount!: number;
  @Input() description!: string;
}
