import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { State } from './presentation'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'Rapid Application Development'

  data$: Observable<Item[]>

  constructor(private store: Store<State>) {
    this.data$ = this.store.pipe(select(getAllItems))
  }

  upload(event) {
    this.store.dispatch(new CreateItem({ item: item }))
  }
}
