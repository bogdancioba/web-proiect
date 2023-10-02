import { Component } from '@angular/core';
import { TradeService } from '../services/trade.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css'],
})
export class TradeComponent {
  constructor(private tradeService: TradeService) {}

  createTrade(
    userId: string,
    stockId: string,
    quantity: number,
    price: number,
    action: string
  ) {
    this.tradeService
      .createTrade({ userId, stockId, quantity, price, action })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
