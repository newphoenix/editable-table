import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditableTableComponent } from './components/editable-table-example/editable-table/editable-table.component';
import { PaginationComponent } from './components/editable-table-example/pagination/pagination.component';
import { EditableTableExampleComponent } from './components/editable-table-example/editable-table-example.component';


@NgModule({
  declarations: [
    AppComponent,
    EditableTableExampleComponent,
    EditableTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
