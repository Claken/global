import React from 'react';
import { 
  Compass, 
  Shield, 
  FileText, 
  BarChart2, 
  Layout, 
  Cpu, 
  Database, 
  Video, 
  HelpCircle,
  Plus
} from 'lucide-react';

interface NavItemProps {
  icon?: React.ReactNode;
  label: string;
  isActive?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasPlus?: boolean;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  isActive = false, 
  isExpanded = false,
  hasChildren = false,
  hasPlus = false,
  children 
}) => {
  return (
    <div className="flex flex-col">
      <div 
        className={`flex items-center px-4 py-2 text-sm ${
          isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <div className="flex items-center w-full">
          {icon && <span className="mr-3 text-gray-500">{icon}</span>}
          <span>{label}</span>
          {hasPlus && (
            <span className="ml-2">
              <Plus size={14} className="text-gray-400" />
            </span>
          )}
          {hasChildren && (
            <span className="ml-auto">
              {isExpanded ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </span>
          )}
        </div>
      </div>
      {isExpanded && children && (
        <div className="ml-7 border-l border-gray-200 pl-3">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-blue-600 text-white flex items-center justify-center font-bold rounded">
            V
          </div>
          <span className="ml-2 font-semibold text-gray-800">VINCI</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Explore
        </div>
        <NavItem icon={<Shield size={18} />} label="SecuredGPT" />
        <NavItem icon={<FileText size={18} />} label="Project Documentation" />
        <NavItem icon={<BarChart2 size={18} />} label="Generative Analytics" />
        <NavItem icon={<Layout size={18} />} label="Dashboard HQ" hasChildren={true} hasPlus={true} />
        <NavItem icon={<Layout size={18} />} label="Dashboard BU" hasChildren={true} hasPlus={true} />
        <NavItem icon={<Cpu size={18} />} label="AI Factory" hasChildren={true} />
        
        <NavItem 
          icon={<Database size={18} />} 
          label="Data Governance" 
          hasChildren={true} 
          isExpanded={true}
        >
          <NavItem label="Overview HQ" isActive={true} />
          <NavItem label="Overview" />
          <NavItem label="Traffic" />
          <NavItem label="Finance" />
          <NavItem label="Retail" />
          <NavItem label="Communication" />
          <NavItem label="Carpark" />
          <NavItem label="Ops" />
          <NavItem label="HR" />
        </NavItem>
        
        <NavItem icon={<Video size={18} />} label="Start Screen Capture" />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-600 text-sm mr-2">Credit</span>
            <HelpCircle size={14} className="text-gray-400" />
          </div>
          <div className="flex items-center">
            <span className="text-green-500 font-medium">4095</span>
            <Plus size={14} className="ml-1 text-gray-400" />
          </div>
        </div>
        <div className="mt-2 bg-gray-200 rounded-full h-1.5">
          <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;