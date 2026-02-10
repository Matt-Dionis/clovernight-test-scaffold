import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Wind, Sun, Droplets, Eye } from 'lucide-react';

interface WeatherMetricsProps {
  wind: string;
  uvIndex: number;
  humidity: number;
  visibility: number;
}

export function WeatherMetrics({ wind, uvIndex, humidity, visibility }: WeatherMetricsProps) {
  return (
    <>
      {/* Wind Status */}
      <Card className="bg-[#1b1b1d] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-[#777777] flex items-center gap-2">
            <Wind className="w-4 h-4" />
            Wind Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            {/* Wind Gauge Visual */}
            <div className="relative w-32 h-32 mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#232325"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#bad4eb"
                  strokeWidth="8"
                  strokeDasharray="150 251"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <text x="50" y="55" textAnchor="middle" className="text-xl font-bold fill-white">
                  7
                </text>
                <text x="50" y="70" textAnchor="middle" className="text-xs fill-[#777777]">
                  km/h
                </text>
              </svg>
            </div>
            <p className="text-sm text-[#efefef]">{wind}</p>
          </div>
        </CardContent>
      </Card>

      {/* UV Index */}
      <Card className="bg-[#1b1b1d] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-[#777777] flex items-center gap-2">
            <Sun className="w-4 h-4" />
            UV Index
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="text-4xl font-bold text-white mb-2">{uvIndex}</div>
            <div className="w-full bg-[#232325] h-2 rounded-full mb-2">
              <div
                className="bg-gradient-to-r from-green-400 to-yellow-400 h-full rounded-full"
                style={{ width: `${(uvIndex / 11) * 100}%` }}
              />
            </div>
            <p className="text-sm text-[#efefef]">Moderate</p>
          </div>
        </CardContent>
      </Card>

      {/* Humidity */}
      <Card className="bg-[#1b1b1d] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-[#777777] flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            Humidity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative w-24 h-24 mb-4">
              <Droplets className="w-full h-full text-[#bad4eb] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{humidity}%</span>
              </div>
            </div>
            <p className="text-sm text-[#efefef]">Normal</p>
          </div>
        </CardContent>
      </Card>

      {/* Visibility */}
      <Card className="bg-[#1b1b1d] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-[#777777] flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Visibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="text-4xl font-bold text-white mb-2">{visibility}</div>
            <p className="text-sm text-[#efefef]">km - Good visibility</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
