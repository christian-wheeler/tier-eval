import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class NetworkModule {
  static forEnvironment(development: boolean): ModuleWithProviders {
    return {
      ngModule: NetworkModule,
      providers: development ? [
          // { provide: AssessmentNetwork, useClass: MockAssessmentNetwork },
        ] :
        [
          // { provide: AssessmentNetwork, useClass: FirebaseAssessmentNetwork },
        ],
    }
  }
}
