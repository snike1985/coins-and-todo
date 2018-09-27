import { Component } from '@angular/core';
import {ListCoinsService} from './services/list-coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ListCoinsService]
})
export class AppComponent {
  title = 'app';

  constructor(private coinsList: ListCoinsService) {
    // this.coinsList.getList().subscribe(data => {
    //   console.log(data);
    // });
  }
}
