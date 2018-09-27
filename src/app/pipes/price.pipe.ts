import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'priceCurrency'
})
export class PricePipe implements PipeTransform {

    transform(value: any, currency?: string): any {
        if (!currency || currency === 'USD') {
            return '$' + (Math.round(value.price_usd * 100) / 100).toFixed(2);
        } else {
            return (Math.round(value['price_' + currency.toLowerCase()] * 100) / 100).toFixed(2);
        }
    }

}
