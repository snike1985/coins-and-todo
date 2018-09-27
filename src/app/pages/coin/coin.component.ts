import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CoinsElement} from '../../interfaces/coins-element';
import {ListCoinsService} from '../../services/list-coins.service';
import {CurrencyService} from '../../services/currency.service';

@Component({
    selector: 'coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
    public coinsSubscribe: Subscription;
    public currencySubscribe: Subscription;
    public curCoin: CoinsElement;
    private dataID = '';
    public curCurrency: string;
    public panelOpenState: boolean = false;

    constructor(private ar: ActivatedRoute,
                private coinsList: ListCoinsService,
                private currencyService: CurrencyService) {
        ar.params.subscribe(param => {
            this.dataID = param['id'] + '/';
        });
    }

    ngOnInit() {
        this.subscribeOnCurrency();
        this.subscribeOnCoin();
    }

    ngOnDestroy() {
        this.unSubscribeOnCurrency();
        this.unSubscribeOnCoin();
        this.coinsList.itemData.next([]);
    }

    private subscribeOnCoin() {
        this.coinsSubscribe = this.coinsList.itemData.subscribe(data => {
            if (data.length) {
                this.curCoin = data[0];
                console.log(this.curCoin);
            } else {
                this.coinsList.getItem(this.dataID, this.curCurrency);
                console.log(this.dataID, this.curCurrency);
            }
        });
    }

    private unSubscribeOnCoin() {
        if (this.coinsSubscribe && !this.coinsSubscribe.closed) {
            this.coinsSubscribe.unsubscribe();
        }
    }

    private subscribeOnCurrency() {
        this.currencySubscribe = this.currencyService.currencyData.subscribe(data => {
            if (data.length) {
                this.curCurrency = data;
            } else {
                this.curCurrency = 'USD';
            }
        });
    }

    private unSubscribeOnCurrency() {
        if (this.currencySubscribe && !this.currencySubscribe.closed) {
            this.currencySubscribe.unsubscribe();
        }
    }

}
