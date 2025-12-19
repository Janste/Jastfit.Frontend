import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodProductCollectionDto } from '../dtos/foodProducts/food-product-dto';
import { FoodProductRequestDto } from '../dtos/foodProducts/food-product-request-dto';

@Injectable({
  providedIn: 'root',
})
export class FoodProductService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(request: FoodProductRequestDto): Observable<FoodProductCollectionDto> {
    const params = new HttpParams()
      .set('name', request.name)
      .set('page', request.page.toString())
      .set('pageSize', request.pageSize.toString());

    return this.http.get<FoodProductCollectionDto>(
      this.baseUrl + '/foodProducts',
      { params }
    );
  }
}
