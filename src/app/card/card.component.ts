import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/Item';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
