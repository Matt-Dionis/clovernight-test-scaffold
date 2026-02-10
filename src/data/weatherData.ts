import { WeatherData, CityWeather } from '@/types/weather';

export const currentWeather: WeatherData = {
  city: 'San Francisco',
  country: 'US',
  temperature: 18,
  condition: 'Partly Cloudy',
  feelsLike: 16,
  high: 21,
  low: 14,
  wind: {
    speed: 12,
    direction: 'NW',
  },
  uvIndex: 4,
  humidity: 68,
  visibility: 10,
  chanceOfRain: [20, 25, 30, 35, 40, 45, 40, 35, 30, 25, 20, 15],
  forecast: [
    { day: 'Mon', icon: '☀️', high: 22, low: 15 },
    { day: 'Tue', icon: '⛅', high: 20, low: 14 },
    { day: 'Wed', icon: '🌧️', high: 18, low: 13 },
    { day: 'Thu', icon: '⛅', high: 19, low: 14 },
    { day: 'Fri', icon: '☀️', high: 23, low: 16 },
    { day: 'Sat', icon: '☁️', high: 21, low: 15 },
    { day: 'Sun', icon: '⛅', high: 22, low: 16 },
  ],
};

export const otherCities: CityWeather[] = [
  { city: 'New York', temperature: 12, condition: 'Cloudy', icon: '☁️' },
  { city: 'Los Angeles', temperature: 24, condition: 'Sunny', icon: '☀️' },
  { city: 'Chicago', temperature: 8, condition: 'Snowy', icon: '❄️' },
  { city: 'Seattle', temperature: 14, condition: 'Rainy', icon: '🌧️' },
  { city: 'Miami', temperature: 28, condition: 'Sunny', icon: '☀️' },
  { city: 'Boston', temperature: 10, condition: 'Partly Cloudy', icon: '⛅' },
  { city: 'Denver', temperature: 15, condition: 'Clear', icon: '☀️' },
  { city: 'Portland', temperature: 16, condition: 'Rainy', icon: '🌧️' },
];
