import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { ClarityModule } from "@clr/angular";
import { ClarityIcons, userIcon, vmwAppIcon, cogIcon, toolsIcon } from '@cds/core/icon'
import '@cds/core/icon/register.js';
import { LayoutComponent } from './layout/layout.component'
ClarityIcons.addIcons(userIcon, vmwAppIcon, cogIcon, toolsIcon)

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
