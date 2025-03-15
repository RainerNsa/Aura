
import React from 'react';
import { 
  Send, Download, Repeat, Plus, CreditCard, 
  Activity, PieChart, ArrowLeftRight
} from 'lucide-react';

interface ActionButtonProps {
  icon: string;
  label: string;
  type?: 'primary' | 'secondary' | 'success' | 'danger';
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  type = 'primary',
  onClick,
}) => {
  // Get icon component based on icon name
  const getIcon = () => {
    const iconSize = 24;
    const iconMap: Record<string, React.ReactNode> = {
      'send': <Send size={iconSize} />,
      'download': <Download size={iconSize} />,
      'repeat': <Repeat size={iconSize} />,
      'plus': <Plus size={iconSize} />,
      'credit-card': <CreditCard size={iconSize} />,
      'activity': <Activity size={iconSize} />,
      'pie-chart': <PieChart size={iconSize} />,
      'convert': <ArrowLeftRight size={iconSize} />
    };

    return iconMap[icon] || <Send size={iconSize} />;
  };

  // Get styles based on type
  const getTypeStyles = () => {
    switch (type) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-muted-foreground';
      case 'success': 
        return 'text-finance-positive';
      case 'danger':
        return 'text-finance-negative';
      default:
        return 'text-primary';
    }
  };

  return (
    <div 
      className={`action-button ${getTypeStyles()}`}
      onClick={onClick}
    >
      {getIcon()}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default ActionButton;
