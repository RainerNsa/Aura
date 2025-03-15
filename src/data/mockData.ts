
// Mock data for the banking/crypto dashboard

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'exchange';
  title: string;
  amount: number;
  currency: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  recipient?: string;
  category?: string;
  icon?: string;
}

export interface Portfolio {
  totalFiat: number;
  totalCrypto: {
    BTC: number;
    ETH: number;
    LTC: number;
    XRP: number;
  };
  distribution: {
    name: string;
    value: number;
    color: string;
  }[];
}

export interface QuickAction {
  id: string;
  icon: string;
  label: string;
  type: 'primary' | 'secondary' | 'success' | 'danger';
}

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    title: 'Paycheck',
    amount: 2750.00,
    currency: 'USD',
    timestamp: '2023-09-15T09:30:00Z',
    status: 'completed',
    category: 'Income',
    icon: 'dollar-sign'
  },
  {
    id: '2',
    type: 'withdrawal',
    title: 'Amazon',
    amount: -64.99,
    currency: 'USD',
    timestamp: '2023-09-14T13:45:00Z',
    status: 'completed',
    category: 'Shopping',
    icon: 'shopping-cart'
  },
  {
    id: '3',
    type: 'exchange',
    title: 'BTC Purchase',
    amount: -1000,
    currency: 'USD',
    timestamp: '2023-09-13T11:20:00Z',
    status: 'completed',
    category: 'Crypto',
    icon: 'bitcoin'
  },
  {
    id: '4',
    type: 'transfer',
    title: 'To Savings',
    amount: -500,
    currency: 'USD',
    timestamp: '2023-09-10T16:50:00Z',
    status: 'completed',
    recipient: 'Savings Account',
    category: 'Transfer',
    icon: 'arrow-right'
  },
  {
    id: '5',
    type: 'withdrawal',
    title: 'Uber',
    amount: -32.50,
    currency: 'USD',
    timestamp: '2023-09-09T20:15:00Z',
    status: 'completed',
    category: 'Transportation',
    icon: 'car'
  },
  {
    id: '6',
    type: 'deposit',
    title: 'Refund',
    amount: 29.99,
    currency: 'USD',
    timestamp: '2023-09-08T14:30:00Z',
    status: 'completed',
    category: 'Refund',
    icon: 'refresh-ccw'
  },
  {
    id: '7',
    type: 'withdrawal',
    title: 'Coffee Shop',
    amount: -5.75,
    currency: 'USD',
    timestamp: '2023-09-08T09:10:00Z',
    status: 'completed',
    category: 'Food & Drink',
    icon: 'coffee'
  },
  {
    id: '8',
    type: 'exchange',
    title: 'ETH Purchase',
    amount: -500,
    currency: 'USD',
    timestamp: '2023-09-07T10:45:00Z',
    status: 'completed',
    category: 'Crypto',
    icon: 'arrow-right'
  },
  {
    id: '9',
    type: 'transfer',
    title: 'To John',
    amount: -100,
    currency: 'USD',
    timestamp: '2023-09-06T18:20:00Z',
    status: 'completed',
    recipient: 'John Smith',
    category: 'Transfer',
    icon: 'send'
  },
  {
    id: '10',
    type: 'withdrawal',
    title: 'Gym Membership',
    amount: -49.99,
    currency: 'USD',
    timestamp: '2023-09-05T07:30:00Z',
    status: 'completed',
    category: 'Health & Fitness',
    icon: 'activity'
  }
];

export const mockPortfolio: Portfolio = {
  totalFiat: 12450.80,
  totalCrypto: {
    BTC: 0.235,
    ETH: 2.456,
    LTC: 10.234,
    XRP: 500.123
  },
  distribution: [
    { name: 'USD', value: 60, color: '#94a3b8' },
    { name: 'BTC', value: 20, color: '#f7931a' },
    { name: 'ETH', value: 15, color: '#627eea' },
    { name: 'Others', value: 5, color: '#cbd5e1' }
  ]
};

export const mockQuickActions: QuickAction[] = [
  {
    id: '1',
    icon: 'send',
    label: 'Send',
    type: 'primary'
  },
  {
    id: '2',
    icon: 'download',
    label: 'Receive',
    type: 'secondary'
  },
  {
    id: '3',
    icon: 'repeat',
    label: 'Exchange',
    type: 'secondary'
  },
  {
    id: '4',
    icon: 'plus',
    label: 'Buy',
    type: 'success'
  }
];

export const getCurrencySymbol = (currency: string): string => {
  switch (currency.toUpperCase()) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    case 'BTC':
      return '₿';
    case 'ETH':
      return 'Ξ';
    case 'LTC':
      return 'Ł';
    default:
      return currency;
  }
};

export const formatCurrency = (amount: number, currency: string): string => {
  const symbol = getCurrencySymbol(currency);
  const absAmount = Math.abs(amount);
  
  if (currency === 'BTC' || currency === 'ETH' || currency === 'LTC') {
    return `${symbol}${absAmount.toFixed(6)}`;
  }
  
  return `${symbol}${absAmount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};
