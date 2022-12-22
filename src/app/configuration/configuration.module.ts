import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { RulesComponent } from './components/rules/rules.component';
import { DocumentTypesComponent } from './components/document-types/document-types.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    ScheduleComponent,
    WorkflowsComponent,
    RulesComponent,
    DocumentTypesComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    SharedModule
  ]
})
export class ConfigurationModule { }
