import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CoinsElement} from '../interfaces/coins-element';

@Injectable()
export class ListCoinsService {
    public allData: BehaviorSubject<CoinsElement[]> = new BehaviorSubject([]);
    public itemData: BehaviorSubject<CoinsElement[]> = new BehaviorSubject([]);

    constructor(private httpService: HttpService) {
    }

    public getList(currency?: string) {
        let curCurrency = '';

        if (currency) {
            curCurrency = '?convert=' + currency;
        }
        this.httpService.get(environment.coinsList + curCurrency).subscribe((data: CoinsElement[]) => {
            this.allData.next(data);
        });
    }

    public getItem(dataID: string, currency: string) {
        let curCurrency = '';

        if (currency) {
            curCurrency = '/?convert=' + currency;
        }
        this.httpService.get(environment.coinsList + dataID + curCurrency).subscribe((data: CoinsElement[]) => {
            this.itemData.next(data);
        });
    }

}
