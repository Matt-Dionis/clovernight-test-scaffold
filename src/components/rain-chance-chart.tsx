import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { HourlyRain } from '@/lib/weather-data';

interface RainChanceChartProps {
  data: HourlyRain[];
}

export function RainChanceChart({ data }: RainChanceChartProps) {
  const maxHeight = 196; // pixels

  return (
    <Card className="bg-[#1b1b1d] border-[#2a2a2a] text-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">Chance Of Rain</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="space-y-2 mb-6 text-sm text-[#ffffff]">
          <div className="flex items-center justify-between">
            <span>Heavy</span>
            <div className="flex-1 mx-4 border-t border-gray-700" />
          </div>
          <div className="flex items-center justify-between">
            <span>Sunny</span>
            <div className="flex-1 mx-4 border-t border-gray-700" />
          </div>
          <div className="flex items-center justify-between">
            <span>Rainy</span>
            <div className="flex-1 mx-4 border-t border-gray-700" />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-[220px]">
          {data.map((item, index) => {
            const barHeight = (item.percentage / 100) * maxHeight;
            const fillHeight = (barHeight * 0.85); // 85% filled

            return (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                {/* Bar */}
                <div
                  className="w-full max-w-[5px] bg-[#232325] rounded-full relative overflow-hidden"
                  style={{ height: `${barHeight}px` }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-[#bad4eb] rounded-full"
                    style={{ height: `${fillHeight}px` }}
                  />
                </div>
                {/* Time Label */}
                <span className="text-xs text-white">{item.time}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
