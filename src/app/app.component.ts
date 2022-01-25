import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities:any;
  weather:any;
  showWeatherInCity:boolean=false;

  constructor(private http: HttpClient) { }
 
  showCities() {
    const domain = 'http://api.airvisual.com';
    const endPointAllCities = '/v2/cities?state=California&country=USA';
    const APIKey = 'e4ebc3d2-4bb6-429a-aeca-4bee88f58e17';
    const url = `${domain}${endPointAllCities}&key=${APIKey}`;

    this.http.get(url).subscribe((response: any) => {
      this.cities = response.data.map((response: any) => response.city);
       console.log(this.cities);
    })
  }
    showWeather(city: any) {
      this.showWeatherInCity = true ;
     
      const domain = 'http://api.airvisual.com';
      const endPointCity = '/v2/city';
      const APIKey = 'e4ebc3d2-4bb6-429a-aeca-4bee88f58e17';
      const urlCity = `${domain}${endPointCity}`;
      const APIParams = {
        city: city,
        state: 'California',
        country: 'USA',
        key: APIKey,
      };
  
      this.http
        .get(urlCity, { params: APIParams })
        .pipe(map((response: any) => response.data.current.weather))
        .subscribe((data: any) => {
          this.weather = data.tp;
          console.log(this.weather)
        });

  }

}