import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ListCoinsService} from '../../services/list-coins.service';
import {Subscription} from 'rxjs/Subscription';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CoinsElement} from '../../interfaces/coins-element';
import {CurrencyService} from '../../services/currency.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
    public coinsSubscribe: Subscription;
    public currencySubscribe: Subscription;
    public allCoins: CoinsElement[];
    public dataSource = new MatTableDataSource();
    public curCurrency: string;
    public currency: Array<string>;

    constructor(private coinsList: ListCoinsService,
                private currencyService: CurrencyService) {}

    ngOnInit() {
        this.currency = this.currencyService.currencyList;
        this.subscribeOnCoin();
        this.subscribeOnCurrency();
    }

    ngOnDestroy() {
        this.unSubscribeOnCoin();
        this.coinsList.allData.next([]);
        this.unSubscribeOnCurrency();
    }

    private subscribeOnCoin() {
        this.coinsSubscribe = this.coinsList.allData.subscribe(data => {
            if (data.length) {
                this.allCoins = data;
                this.dataSource.data = data;
                console.log(this.dataSource.data);
            } else {
                this.coinsList.getList();
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

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    selectRow(row) {
        console.log(row);
    }

    public onChange(value) {
        this.currencyService.set(value);
        this.coinsList.getList(this.curCurrency);
    }
}