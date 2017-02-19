import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import 'rxjs/Rx';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }
  cWeather:CurrentWeather;
  location

  ngOnInit() {
    this.cWeather = this.weatherService.dummy();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.localWeather(lat, lon).subscribe(
        (data) => {
          console.log(data);
          this.cWeather = new CurrentWeather(data.name,
                                            data.main.temp,
                                            data.weather[0].icon,
                                            data.weather[0].description,
                                            data.main.temp_max,
                                            data.main.temp_min);
        }
      )
    })
  }

}
