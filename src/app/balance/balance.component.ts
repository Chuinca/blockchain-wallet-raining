import { Component, OnInit, Input } from '@angular/core';
import { Block, Transaction } from 'projects/blockchain/src/public_api';
import { getComponentViewByIndex } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  @Input() chain: Block[];
  
  public owner: string;
  public value = 0;
  public balance: { owner: string, value: number };
  constructor() { }


  ngOnInit() {
    this.balance= {owner: this.owner, value: this.value};
  }

  getBalance(owner: string){
    this.owner= owner;
    const initial= new Transaction(0, 'system', owner);
    let total = 0;
    this.chain.filter((block: Block) =>{
      for (const transaction of block.transactions){
        if ( transaction.recipient === initial.recipient) {
          total += Number(transaction.amount);
        }
      }
    });
    this.value = total;
  }
}
