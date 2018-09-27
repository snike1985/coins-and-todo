import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoinRoutingModule} from './coin-routing.module';
import {CoinComponent} from './coin.component';
import {CustomMaterialModule} from '../../components/custom-material/custom-material.module';
import {GrowthFallPipe} from '../../pipes/growth-fall.pipe';
import {CurrencyService} from '../../services/currency.service';
import {PricePipe} from '../../pipes/price.pipe';
import {PriceModule} from '../../pipes/price.module';
import {GrowthFallModule} from '../../pipes/growth-fall.module';

@NgModule({
    imports: [
        CommonModule,
        CoinRoutingModule,
        CustomMaterialModule,
        PriceModule,
        GrowthFallModule
    ],
    declarations: [CoinComponent],
    providers: [CurrencyService]
})
export class CoinModule {
}
