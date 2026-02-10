export interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  condition: string;
  icon: string;
  sunrise: string;
  sunset: string;
  realFeel: number;
  wind: string;
  pressure: string;
  humidity: number;
  visibility: number;
  uvIndex: number;
  time: string;
}

export interface ForecastDay {
  day: string;
  temperature: number;
  icon: string;
  condition: string;
}

export interface HourlyRain {
  time: string;
  percentage: number;
}

export interface CityWeather {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  icon: string;
}

export const currentWeather: WeatherData = {
  location: "Dhaka",
  country: "Bangladesh",
  temperature: 16,
  condition: "Sunny Windy",
  icon: "sunny-windy",
  sunrise: "5:30AM",
  sunset: "6:45PM",
  realFeel: 18,
  wind: "N-E. 6-7km/h",
  pressure: "100MB",
  humidity: 51,
  visibility: 8.5,
  uvIndex: 3,
  time: "11:45 AM"
};

export const sevenDayForecast: ForecastDay[] = [
  { day: "SAT", temperature: 10, icon: "rainy-sunny", condition: "Rainy Sunny" },
  { day: "SUN", temperature: 15, icon: "sunny", condition: "Sunny" },
  { day: "MON", temperature: 11, icon: "sunny", condition: "Sunny" },
  { day: "TUE", temperature: 10, icon: "rainy", condition: "Rainy" },
  { day: "WED", temperature: 12, icon: "rainy-sunny", condition: "Rainy Sunny" },
  { day: "THU", temperature: 10, icon: "windy", condition: "Windy" },
  { day: "FRI", temperature: 11, icon: "sunny", condition: "Sunny" },
];

export const hourlyRainChance: HourlyRain[] = [
  { time: "10AM", percentage: 83 },
  { time: "11AM", percentage: 86 },
  { time: "12AM", percentage: 88 },
  { time: "01PM", percentage: 80 },
  { time: "02PM", percentage: 86 },
  { time: "03PM", percentage: 75 },
];

export const otherCities: CityWeather[] = [
  { city: "Beijing", country: "China", temperature: 12, condition: "Cloudy", icon: "rainy" },
  { city: "California", country: "US", temperature: 18, condition: "Windy", icon: "windy" },
  { city: "Arab Emirates", country: "Dubai", temperature: 22, condition: "Mostly Sunny", icon: "sunny" },
  { city: "Canada", country: "Canada", temperature: 8, condition: "Light Snow", icon: "snow" },
];
