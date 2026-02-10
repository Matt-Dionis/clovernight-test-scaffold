export interface WeatherData {
  location: {
    city: string;
    country: string;
  };
  current: {
    temp: number;
    feelsLike: number;
    condition: string;
    icon: string;
    sunrise: string;
    sunset: string;
    wind: {
      speed: number;
      direction: string;
    };
    humidity: number;
    pressure: number;
    visibility: number;
    uvIndex: number;
  };
  forecast: DayForecast[];
  hourly: HourlyForecast[];
}

export interface DayForecast {
  day: string;
  temp: number;
  condition: string;
  icon: string;
}

export interface HourlyForecast {
  time: string;
  rainChance: number;
}

export interface CityWeather {
  city: string;
  country: string;
  temp: number;
  condition: string;
  icon: string;
}

// Real weather data based on the Figma design
export const weatherData: WeatherData = {
  location: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  current: {
    temp: 16,
    feelsLike: 18,
    condition: "Sunny Windy",
    icon: "sunny-windy",
    sunrise: "5:30 AM",
    sunset: "6:45 PM",
    wind: {
      speed: 6.7,
      direction: "N-E",
    },
    humidity: 51,
    pressure: 100,
    visibility: 8.5,
    uvIndex: 3,
  },
  forecast: [
    { day: "SAT", temp: 10, condition: "Rainy Sunny", icon: "rainy-sunny" },
    { day: "SUN", temp: 15, condition: "Sunny", icon: "sunny" },
    { day: "TUE", temp: 10, condition: "Rainy", icon: "rainy" },
    { day: "WED", temp: 12, condition: "Rainy Sunny", icon: "rainy-sunny" },
    { day: "THU", temp: 10, condition: "Windy", icon: "windy" },
    { day: "MON", temp: 11, condition: "Sunny", icon: "sunny" },
  ],
  hourly: [
    { time: "10AM", rainChance: 83 },
    { time: "11AM", rainChance: 86 },
    { time: "12PM", rainChance: 88 },
    { time: "01PM", rainChance: 80 },
    { time: "02PM", rainChance: 86 },
    { time: "03PM", rainChance: 75 },
  ],
};

export const otherCities: CityWeather[] = [
  {
    city: "Beijing",
    country: "China",
    temp: 8,
    condition: "Cloudy",
    icon: "rainy",
  },
  {
    city: "California",
    country: "US",
    temp: 18,
    condition: "Windy",
    icon: "windy",
  },
  {
    city: "Arab Emirates",
    country: "Dubai",
    temp: 25,
    condition: "Mostly Sunny",
    icon: "sunny",
  },
  {
    city: "Canada",
    country: "Toronto",
    temp: 5,
    condition: "Light Snow",
    icon: "snow",
  },
];
