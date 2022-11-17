import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { TestService } from '../servies/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 data! : Data[];
  constructor(public testService : TestService) { 
    this.loadTopMenu();
  }

  ngOnInit(): void {
  }

  loadTopMenu() {
    this.testService.loadTopMenu().subscribe(
      (res : any) => {
        debugger;
        if (res.statusCode === 1) {
          this.data = res.result;
        }
      }
    )
  }
}
