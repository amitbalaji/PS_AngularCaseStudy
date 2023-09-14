import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ECommerceService } from './e-commerce.service';
import { ECommerceModel } from './e-commerce.model';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css'],
})
export class ECommerceComponent implements OnInit, OnDestroy {
  priceOrder: any = [];
  productData: any = [];
  productHeading = ECommerceModel.productHeading;
  priceText = ECommerceModel.priceText;
  currentView = ECommerceModel.currentView;
  errorMessage = null;
  loading = false;
  productDataSubs!: Subscription;

  constructor(private ecommerceService: ECommerceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.priceOrder = [
      { value: 'lowToHigh', name: 'price: low to high' },
      { value: 'highToLow', name: 'price: high to low' },
    ];

   
    this.ecommerceService.getProducts()
      .subscribe((res:any) => {
      res['products'].map((res: any) => {
       this.productData.push({
        product_img:res.thumbnail,
        product_name:res.brand,
        product_price:res.price
       })
      });
      });
      this.productData = this.productData.sort(
              (low: { price: number }, high: { price: number }) =>
                low.price - high.price
            );
            this.loading = false;
    // this.productDataSubs = forkJoin([productDataSub, productPhotosSub])
    //   .pipe(
    //     map((productResponse) => {
    //       for (let value of Object.values(productResponse[0])) {
    //         this.productData.push(value);
    //       }
    //       for (let [key, value] of Object.entries(
    //         Object.entries(productResponse[1])[2][1]
    //       )) {
    //         this.productData[key].product_img = value;
    //       }
    //     })
    //   )
    //   .subscribe(() => {
    //     this.productData = this.productData.sort(
    //       (low: { price: number }, high: { price: number }) =>
    //         low.price - high.price
    //     );
    //     this.loading = false;
    //   });
  }

  gridView() {
    this.currentView = ECommerceModel.gridView;
  }
  listView() {
    this.currentView = ECommerceModel.listView;
  }

  sortPriceOrder(event: any) {
    switch (event.target.value) {
      case ECommerceModel.lowToHigh: {
        this.productData = this.productData.sort(
          (low: { product_price: number }, high: { product_price: number }) =>
            low.product_price - high.product_price
        );
        break;
      }
      case ECommerceModel.highToLow: {
        this.productData = this.productData.sort(
          (low: { product_price: number }, high: { product_price: number }) =>
            high.product_price - low.product_price
        );
        break;
      }
      default: {
        this.productData = this.productData.sort(
          (low: { product_price: number }, high: { product_price: number }) =>
            low.product_price - high.product_price
        );
        break;
      }
    }
  }

  ngOnDestroy() {
   
  }
}
