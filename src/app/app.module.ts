import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TableComponent } from './framework/components/table/table.component'
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { effects, reducers } from './presentation'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { NetworkModule } from './network/network.module'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NetworkModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
