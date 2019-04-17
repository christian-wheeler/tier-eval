import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Entity } from '@christianwheeler/architecture'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() data: Observable<Entity[]>
  @Output() onSubmit = new EventEmitter()

  form: FormGroup

  constructor() {}

  ngOnInit() {
    this.data.subscribe(data => {
      if (data.length > 0) this.createForm(data[0])
    })
  }

  formatName(name: string): string {
    return name.substring(0, 1).toUpperCase() + name.substring(1)
  }

  displayedColumns(entity: Entity): string[] {
    return entity === undefined ? [] : Object.keys(entity)
  }

  isDate(field) {
    return field instanceof Date
  }

  createForm(entity: Entity): FormGroup {
    let controls = { }
    this.controls(entity).forEach(key => {
      controls[key] = new FormControl(null, Validators.required)
    })
    this.form = new FormGroup(controls)
    return this.form
  }

  controls(entity: Entity): string[] {
    return Object.keys(entity).filter(key => !['id', 'created', 'updated'].includes(key))
  }

  validate(entity: Entity) {
    if (this.form.valid) {
      let controls = { }
      this.controls(entity).forEach(key => {
        controls[key] = this.form.controls[key].value
      })
      this.onSubmit.next({ ...entity, ...controls })
    }
    else {
      console.log('not valid yo', this.form)
    }
  }
}
