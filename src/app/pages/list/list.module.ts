import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {CustomMaterialModule} from '../../components/custom-material/custom-material.module';
import {RouterModule} from '@angular/router';
import {CurrencyService} from '../../services/currency.service';
import {PriceModule} from '../../pipes/price.module';
import {CoinModule} from '../coin/coin.module';

@NgModule({
    imports: [
        CommonModule,
        ListRoutingModule,
        CustomMaterialModule,
        RouterModule,
        PriceModule,
        CoinModule
    ],
    declarations: [ListComponent],
    providers: [CurrencyService]
})
export class ListModule {
}
