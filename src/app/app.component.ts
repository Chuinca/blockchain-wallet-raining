import { Component, Inject, TemplateRef } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-wallet-training';
  public blockchain: Blockchain;
  public isValid: boolean;
  public liveTransactions: Transaction[];
  modalRef: BsModalRef;
  alerts: any[] = [];



  constructor(@Inject(BlockchainService) private blockchainService: BlockchainService, private modalService: BsModalService) {
    this.blockchain= this.blockchainService.blockchain;
    this.isValid= this.blockchain.isValidChain(this.blockchain);
  }

  onMine(): boolean{
    //this.add();
    return this.blockchainService.mine();

  }

  //MODAL
  openModal(template: TemplateRef<any>, t: Transaction[]) {
    this.liveTransactions= t;
    
    this.modalRef = this.modalService.show(template);
  }

  //ALERT
  add(): void {

      this.alerts.push({
        type: 'info',
        msg: `Search Successfull.`,
        timeout: 2500
      });
  }
 
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
