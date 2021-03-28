import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromotionComponent } from './promotion/promotion.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,//composant racine
    PromotionComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // to be able to use ngModel on input tags
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
