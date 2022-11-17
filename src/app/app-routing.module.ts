import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test-component/test.component';

const routes: Routes = [
  {path: '', component: TestComponent},
  {path: 'test', component: TestComponent},
  {
    path: 'testdata',
    loadChildren: () => import('./test-module/test.module').then(m => m.TestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
