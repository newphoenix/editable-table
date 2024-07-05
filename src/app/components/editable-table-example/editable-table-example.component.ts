import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-editable-table-example',
  templateUrl: './editable-table-example.component.html',
  styleUrl: './editable-table-example.component.css'
})
export class EditableTableExampleComponent {


  validation: any = {};
  data: any[] = [];
  totalPages!: number;
  totalItems!: number;
  first!: boolean;
  last!: boolean;

  constructor(private dataService: DataService) {

    this.dataService.fetchUserData(0)
      .subscribe({
        next: (respData) => {
          this.data = respData.data;
          this.validation = respData.validation;
          this.totalPages = respData.total_pages;
          this.totalItems = respData.total_items;
          this.first = respData.first;
          this.last = respData.last;
        }
      });
  }


  loadNextPage = (pageNumberToLoad: number): void => {
    this.dataService.fetchUserData(pageNumberToLoad)
      .subscribe({
        next: (respData) => {
          this.data = respData.data;
          this.validation = respData.validation;
          this.totalPages = respData.total_pages;
          this.totalItems = respData.total_items;
          this.first = respData.first;
          this.last = respData.last;
        }
      });
  }


  changedRow(row: any) {
    // saving the changed data is done here
    console.log(row);

  }


}
