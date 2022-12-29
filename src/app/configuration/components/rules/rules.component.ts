import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  enableBlockElements: boolean = false;
  rulesForm: FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.rulesForm = fb.group({
      'enableLog': new FormControl(false),
      'blockFailsElemets': new FormControl(false),
      'tryLimits': new FormControl(2),
      'deleteDocumentAfterSync': new FormControl(false),
      'validateBatchConverttion': new FormControl(false),
      'enableLocalConfig': new FormControl(false),
      'enableConsole': new FormControl(false),
    })
  }

  translate = (word: string) => {
    return word
  }
}
