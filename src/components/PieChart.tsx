
import React, { useEffect, useRef } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '@/context/ThemeContext';

interface PieChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  innerRadius = 60,
  outerRadius = 80,
  className = '',
}) => {
  const { isDark } = useTheme();
  const chartRef = useRef<any>(null);

  // Animate pie chart on render
  useEffect(() => {
    if (chartRef.current) {
      // Animation could be controlled here if needed
    }
  }, []);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-2 rounded-lg shadow-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-full h-48 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart ref={chartRef}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={1}
            dataKey="value"
            animationDuration={1000}
            animationBegin={0}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
