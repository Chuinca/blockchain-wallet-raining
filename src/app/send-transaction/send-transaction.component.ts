import { Component, OnInit, Input, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-send-transaction',
  templateUrl: './send-transaction.component.html',
  styleUrls: ['./send-transaction.component.scss']
})
export class SendTransactionComponent implements OnInit {
  public variavel: string;
  
  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService) {  }

  ngOnInit() {
  }

  onSend(amount: number, recipient: string) {
    const id= this.blockchainService.blockchain.nodeUrl;
    const transaction= new Transaction(amount, id, recipient);

    this.blockchainService.addTransaction(transaction);
  }

}
