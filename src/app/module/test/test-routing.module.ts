import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestdataComponent } from './testdata/testdata.component';

const routes: Routes = [
  {path: '', component: TestdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
