import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundRountingModule } from "./not-found-routing.module";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRountingModule],
  exports: [],
  providers: []
})
export class NotFoundModule { }