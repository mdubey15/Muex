import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.Service';

@Component
  ({
  template: '<Marketplace></Marketplace>',
  templateUrl: './Marketplace.component.html'
  })
export class MarketplaceComponent {


  constructor(private api: ApiService) { }

  getSearchedItem()
  {
    
  }
  
}
