import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [HomeComponent, TimelineComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
