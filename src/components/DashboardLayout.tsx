
import React from 'react';
import ThemeToggle from './ThemeToggle';
import BalanceCard from './BalanceCard';
import TransactionList from './TransactionList';
import ActionButton from './ActionButton';
import { mockPortfolio, mockTransactions, mockQuickActions } from '@/data/mockData';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div>
          <h1 className="text-2xl font-bold">Aura Banking</h1>
          <p className="text-muted-foreground">Welcome back, Alex</p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Balance Card */}
          <div className="md:col-span-4">
            <BalanceCard 
              totalBalance={mockPortfolio.totalFiat}
              cryptoEquivalent={mockPortfolio.totalCrypto.BTC}
              distribution={mockPortfolio.distribution}
              percentChange={2.4}
            />
          </div>

          {/* Transaction List */}
          <div className="md:col-span-5">
            <TransactionList transactions={mockTransactions.slice(0, 5)} />
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3">
            <div className="dashboard-card">
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {mockQuickActions.map((action) => (
                  <ActionButton
                    key={action.id}
                    icon={action.icon}
                    label={action.label}
                    type={action.type}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
          {/* Additional widgets would go here */}
          <div className="md:col-span-12">
            <div className="dashboard-card">
              <h2 className="text-lg font-medium mb-4">Market Overview</h2>
              <div className="h-40 flex items-center justify-center">
                <p className="text-muted-foreground">Market chart would display here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
