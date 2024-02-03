import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbInputModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    NbCheckboxModule,
    NbMenuModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    ThemeModule,
    MiscellaneousModule,
    DashboardModule,
    ECommerceModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
