import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { QueueConfiguration, QueueService } from 'src/app/services/queue.service';
import { LoaderService } from 'src/app/shared/loading-wrapper/loader.service';
import { NotificationService, ToastType } from 'src/app/shared/notification/notification.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent {
  showAdvance: boolean = false;
  queueForm: FormGroup;
  /**
   *
   */
  constructor(private fb: FormBuilder, private queueSrv: QueueService, private loader: LoaderService, private notify: NotificationService) {
    this.queueForm = this.fb.group({
      server: this.buildNewControl('Sample', [Validators.required, Validators.maxLength(15)]),
      queueName: this.buildNewControl('sample', [Validators.required, Validators.maxLength(15)]),
      exchange: this.buildNewControl('sample exchange', [Validators.required]),
      username: this.buildNewControl('sample user', [Validators.required]),
      password: this.buildNewControl('sample password', [Validators.required]),
      virtualHost: this.buildNewControl(5672, [Validators.required]),
      port: this.buildNewControl(5672, [Validators.required]),
      prefetchSize: this.buildNewControl(10, [Validators.required]),
      prefetch: this.buildNewControl(10, [Validators.required]),
      heartbeat: this.buildNewControl(1, [Validators.required]),
    })
    this.loader.setLoading(true)
    this.queueSrv.getQueue().then((cfg) => {
      this.queueForm.patchValue(cfg)
      this.loader.setLoading(false)
    })
  }

  buildNewControl = <T extends {}>(defaultValue: T, validator: ValidatorFn[]) => {
    return new FormControl(defaultValue, validator)
  }

  onShowAdvance = () => {
    this.showAdvance = !this.showAdvance;
  }

  onSave = () => {
    let queueCfg: QueueConfiguration = this.queueForm.getRawValue()
    this.loader.setLoading(true)
    debugger
    this.queueSrv.saveChanges(queueCfg)
      .then(() => {
        this.loader.setLoading(false)
        this.showNotification("ConfigurationSavesd", "Info", ToastType.Info)
      })
      .catch(() => {
        this.loader.setLoading(false)
        this.showNotification("ConfigurationSavesd", "Error", ToastType.Error)
      })
  }

  showNotification = (message: string, title: string, type: ToastType) => {
    this.notify.show({ message: message, title: title }, type)
  }
}
