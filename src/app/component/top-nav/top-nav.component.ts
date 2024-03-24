import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private sb: SearchBarService) {}

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe((status) => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
     console.log(inputElement);
    this.inputFilterRes.emit(inputElement.value);
  }
}

/////function constructor(private: any, router: any, Router: typeof Router, private1: any, sb: any, SearchBarService: any) {
 // throw new Error('Function not implemented.');
//}


function ngOnInit() {
  throw new Error('Function not implemented.');
}


function onNavigateToLogin() {
  throw new Error('Function not implemented.');
}


function filterBrowsingList(inputElement: any, HTMLInputElement: { new(): HTMLInputElement; prototype: HTMLInputElement; }) {
  throw new Error('Function not implemented.');
}
