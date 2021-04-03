import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseListComponent } from "./course.list.component";

@NgModule({
  declarations: [CourseListComponent],
  imports: [CommonModule, FormsModule, AppPipeModule],
  exports: [CourseListComponent]
})
export class CourseModule {}
