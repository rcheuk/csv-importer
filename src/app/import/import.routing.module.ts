import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportComponent } from './import.component';

export const appRoutes: Routes = [
  { path: 'import', component: ImportComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ImportRoutingModule {}
