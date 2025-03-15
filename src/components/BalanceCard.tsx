
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import PieChart from './PieChart';
import { formatCurrency } from '@/data/mockData';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface BalanceCardProps {
  totalBalance: number;
  cryptoEquivalent: number;
  distribution: {
    name: string;
    value: number;
    color: string;
  }[];
  percentChange: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  totalBalance,
  cryptoEquivalent,
  distribution,
  percentChange,
}) => {
  const { isDark } = useTheme();
  const isPositive = percentChange >= 0;

  return (
    <div className="dashboard-card overflow-hidden relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-finance-positive/5 dark:to-finance-positive/10 rounded-2xl pointer-events-none"></div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h2 className="text-lg font-medium text-muted-foreground">Total Holdings</h2>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tabular-nums">
              {formatCurrency(totalBalance, 'USD')}
            </span>
            <span className={`flex items-center text-sm ${isPositive ? 'text-finance-positive' : 'text-finance-negative'}`}>
              {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {Math.abs(percentChange)}%
            </span>
          </div>
          <div className="text-sm text-muted-foreground mt-1 tabular-nums">
            ≈ {formatCurrency(cryptoEquivalent, 'BTC')}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-sm font-medium mb-2">Asset Distribution</h3>
          <div className="flex-1 flex items-center justify-center">
            <PieChart data={distribution} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
