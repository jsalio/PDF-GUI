import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { ClarityModule } from "@clr/angular";
import { ClarityIcons, userIcon, vmwAppIcon, cogIcon, toolsIcon } from '@cds/core/icon'
import '@cds/core/icon/register.js';
import '@cds/core/input/register.js';
import { LayoutComponent } from './layout/layout.component'
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioListComponent } from './radio-list/radio-list.component';
ClarityIcons.addIcons(userIcon, vmwAppIcon, cogIcon, toolsIcon)

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    SelectorComponent,
    RadioListComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    TranslateModule,
    SelectorComponent,
    RadioListComponent
  ]
})
export class SharedModule { }
