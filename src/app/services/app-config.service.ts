import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimerOption } from '../shared/models/TimerOption';
import { TimeUnit } from '../shared/models/TimeUnit';
import { WorkMode } from '../shared/models/WorkMode';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) { }

  getConfig = () => {
    return new Promise<AppSetting>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          workMode: WorkMode.Timer,
          enableSecondQueue: true,
          timerWorkMode: TimerOption.Stopwatch,
          timeUnit: TimeUnit.Minutes,
          interval: 3,
          startDate: '',
          timeInit: '',
          timeEnd: ''
        } as AppSetting)
      }, 5000);
    })
  }

  saveChange = (updatedSettings: AppSetting) => {
    return new Promise<AppSetting>((resolve, reject) => {
      setTimeout(() => {
        resolve(updatedSettings)
      }, 5000)
    })
  }
}

export interface AppSetting {
  workMode: WorkMode
  enableSecondQueue: boolean;
  timerWorkMode: TimerOption;
  timeUnit: TimeUnit;
  interval: number;
  startDate: string;
  timeInit: string | '00:00';
  timeEnd: string | '00:00';
}
