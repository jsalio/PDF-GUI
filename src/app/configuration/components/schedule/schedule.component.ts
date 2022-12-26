import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TimeUnit } from 'src/app/shared/models/TimeUnit';
import { WorkMode } from "src/app/shared/models/WorkMode";
import { TimerOption } from "src/app/shared/models/TimerOption";
import { Option } from 'src/app/shared/selector/selector.component';
import { EnumToList } from 'src/app/shared/utils/enumToList';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  selectorOptions: Option<string>[];
  timerOptions: Option<string>[];
  workModeOptions: Option<string>[];
  scheduleForm: FormGroup;
  selectedWorkMode = WorkMode.Queue;
  selectedWatchMode = TimerOption.Stopwatch;
  timerSetting = TimeUnit.None;
  touched: boolean = false;

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      workMode: new FormControl(WorkMode.Queue),
      timerMode: new FormControl(TimeUnit.None),
      timerWorkMode: new FormControl(TimerOption.Stopwatch),
      interval: new FormControl(10),
      StartDate: new FormControl(new Date().toLocaleDateString()),
      TimeInit: new FormControl('00:00'),
      TimeEnd: new FormControl('23:59'),
      enableSecondQueue: new FormControl(true)
    })
    this.selectorOptions = EnumToList(TimeUnit) as unknown as Option<string>[];
    this.timerOptions = EnumToList(TimerOption) as unknown as Option<string>[];
    this.workModeOptions = EnumToList(WorkMode) as unknown as Option<string>[];
    this.scheduleForm.statusChanges.subscribe((p) => {
      if (this.scheduleForm.dirty) {
        this.touched = true;

      }
    })
  }

  isStoptWatchMode = () => {
    return this.selectedWorkMode === WorkMode.Timer
  }

  isStopWatchModeTimer = () => {
    return this.selectedWatchMode === TimerOption.Stopwatch && this.selectedWorkMode === WorkMode.Timer;
  }

  onChanges(): void {
    this.scheduleForm.get('workMode')?.valueChanges.subscribe(val => {
      console.log(val)
    });
  }

  listenerChange = (e: any) => {
    if ((e.target.value as WorkMode) === WorkMode.Queue) {

    }
  }

  IsSchedule = () => {
    return this.selectedWatchMode === TimerOption.Schedule && this.selectedWorkMode === WorkMode.Timer;
  }

  onSave = () => {
    console.log(this.scheduleForm.getRawValue())
  }

  onCancel = () => {
    this.touched = false
  }

}