import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { State } from './presentation'
import { Observable } from 'rxjs'
import { getAllUsers } from './presentation/user/user.selectors'
import { CreateUser, LoadUsers } from './presentation/user/user.actions'
import { User } from './entity/user.entity'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'Rapid Application Development'

  data$: Observable<User[]>

  constructor(private store: Store<State>) {
    this.data$ = this.store.pipe(select(getAllUsers))

    this.store.dispatch(new LoadUsers())
  }

  upload(event) {
    this.store.dispatch(new CreateUser({ user: event }))
  }
}
