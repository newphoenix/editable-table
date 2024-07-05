import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {


  totalItems = input.required<number>();
  totalPages = input.required<number>();
  currentPage = 0;
  first = input.required<boolean>();
  last = input.required<boolean>();

  loadNextPage = input.required<Function>();

  loadPage(PageNumber: number) {
    this.currentPage = PageNumber;
    this.loadNextPage()?.(PageNumber);
  }


}
