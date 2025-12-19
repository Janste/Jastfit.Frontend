import { Component, OnInit, signal } from '@angular/core';
import { FoodProductDto } from '../../dtos/foodProducts/food-product-dto';
import { FoodProductService } from '../../services/food-product-service';
import { FoodProductRequestDto } from '../../dtos/foodProducts/food-product-request-dto';

@Component({
  selector: 'jastfit-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator implements OnInit {
  foodProducts = signal<FoodProductDto[]>([]);

  constructor(private foodProductService: FoodProductService) {}

  ngOnInit() {
    const request: FoodProductRequestDto = {
      name: '',
      page: 0,
      pageSize: 20,
    };

    this.foodProductService.getAll(request).subscribe((result) => {
      this.foodProducts.set(result.data);
    });
  }
}
