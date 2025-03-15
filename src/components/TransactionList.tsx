
import React from 'react';
import { Transaction, formatCurrency } from '@/data/mockData';
import { 
  ArrowRight, ArrowDown, ArrowUp, RotateCw, 
  DollarSign, ShoppingCart, Coffee, Activity, 
  BitcoinIcon, Send, RefreshCcw, Car
} from 'lucide-react';
import { format } from 'date-fns';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  // Get icon based on transaction type
  const getTransactionIcon = (transaction: Transaction) => {
    const iconMap: Record<string, React.ReactNode> = {
      'dollar-sign': <DollarSign size={18} />,
      'shopping-cart': <ShoppingCart size={18} />,
      'bitcoin': <BitcoinIcon size={18} />,
      'arrow-right': <ArrowRight size={18} />,
      'car': <Car size={18} />,
      'refresh-ccw': <RefreshCcw size={18} />,
      'coffee': <Coffee size={18} />,
      'send': <Send size={18} />,
      'activity': <Activity size={18} />
    };

    if (transaction.icon && iconMap[transaction.icon]) {
      return iconMap[transaction.icon];
    }

    // Default icons based on transaction type
    switch (transaction.type) {
      case 'deposit':
        return <ArrowDown size={18} />;
      case 'withdrawal':
        return <ArrowUp size={18} />;
      case 'transfer':
        return <ArrowRight size={18} />;
      case 'exchange':
        return <RotateCw size={18} />;
      default:
        return <DollarSign size={18} />;
    }
  };

  return (
    <div className="dashboard-card flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Recent Transactions</h2>
        <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
          View All
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1">
        {transactions.map((transaction) => {
          const isNegative = transaction.amount < 0;
          const formattedDate = format(new Date(transaction.timestamp), 'MMM d, h:mm a');

          return (
            <div key={transaction.id} className="transaction-item">
              <div className={`
                flex items-center justify-center w-9 h-9 rounded-full 
                ${isNegative ? 'bg-finance-negative-surface' : 'bg-finance-positive-surface'}
              `}>
                {getTransactionIcon(transaction)}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{transaction.title}</span>
                  <span className={`tabular-nums font-medium ${isNegative ? 'text-finance-negative' : 'text-finance-positive'}`}>
                    {isNegative ? '-' : '+'}{formatCurrency(Math.abs(transaction.amount), transaction.currency)}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{transaction.category}</span>
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
