export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  feelsLike: number;
  high: number;
  low: number;
  wind: {
    speed: number;
    direction: string;
  };
  uvIndex: number;
  humidity: number;
  visibility: number;
  chanceOfRain: number[];
  forecast: DayForecast[];
}

export interface DayForecast {
  day: string;
  icon: string;
  high: number;
  low: number;
}

export interface CityWeather {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
}
