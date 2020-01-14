import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.Service';

@Component
  ({
    template: '<Customer></Customer>',
  templateUrl: './Customer.component.html'
  })
export class CustomerComponent {


  constructor(private api: ApiService) { }


  ngOnInit() {
    
}


}
