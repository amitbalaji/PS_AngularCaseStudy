import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor(private httpClient: HttpClient) { }

  dailyForecast() {
    return this.httpClient.get("https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=fe6f5c3de864fcf065d1acf269708216")
    .pipe(map((response) => {
      return response;
    }))
     
  }
}
