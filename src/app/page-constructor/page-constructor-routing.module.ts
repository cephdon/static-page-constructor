import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConstructorComponent } from './page-constructor.component';
import { PageEditComponent } from './page-edit/page-edit.component';

const routes: Routes = [
    {
        path: '',
        component: PageConstructorComponent,
        children: [
		    {
		        path: 'page-edit/:id',
		        component: PageEditComponent
		    }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageConstructorRoutingModule { }