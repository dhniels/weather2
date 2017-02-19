import { Injectable } from '@angular/core';

import { CurrentWeather } from './current-weather';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  currentWeather:CurrentWeather = new CurrentWeather('Salt Lake',
                                                      '25',
                                                      '03n',
                                                      'cloudy',
                                                      '33',
                                                      '15');
  constructor(private http:Http) { }

dummy(){
  return this.currentWeather;
}

localWeather(lat:string, lon:string){
  return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c777fb68941267e320f45a186f1d79bc&units=imperial`).map((response:Response) => response.json());
};

}
