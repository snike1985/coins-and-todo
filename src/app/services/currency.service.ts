import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CurrencyService {
    public currencyList = ['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR',
        'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY',
        'TWD', 'ZAR'];
    public currencyData: BehaviorSubject<string> = new BehaviorSubject('USD');

    constructor() {
    }

    public set(currency) {
        this.currencyData.next(currency);
    }
}
