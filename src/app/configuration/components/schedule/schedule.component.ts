import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Option } from 'src/app/shared/selector/selector.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  options = ''
  options2 = '';

  selectorOptions: Option<string>[] = [
    {
      label: 'Choose one',
      value: 'op0'
    },
    {
      label: 'option1',
      value: 'op1'
    },
    {
      label: 'option2',
      value: 'op2'
    }
  ]

  timerOptions: Option<string>[] = [
    {
      label: 'option1',
      value: 'op1'
    },
    {
      label: 'option2',
      value: 'op2'
    }
  ]
  scheduleForm: FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      timerMode: new FormControl('op1'),
      timerWorkMode: new FormControl('op2')
    })

  }
}
