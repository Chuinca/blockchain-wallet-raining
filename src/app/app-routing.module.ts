import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockComponent } from './block/block.component';

const routes: Routes = [
  {path: 'send-transaction', component: SendTransactionComponent},
  {path: 'app-balance', component: BalanceComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'block', component: BlockComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
