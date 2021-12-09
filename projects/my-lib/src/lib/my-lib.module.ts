import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [MyLibComponent],
  imports: [
    RecaptchaModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
