import React from 'react';
import { Airport } from '../types';
import { Check, X, ChevronDown } from 'lucide-react';

interface AirportDataTableProps {
  data: Airport[];
}

const StatusIndicator: React.FC<{ isPositive: boolean }> = ({ isPositive }) => {
  return (
    <div className={`h-6 w-6 rounded-full flex items-center justify-center ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}>
      {isPositive ? (
        <Check size={14} className="text-white" />
      ) : (
        <X size={14} className="text-white" />
      )}
    </div>
  );
};

const AirportCode: React.FC<{ code: string; hasIssue: boolean; hasPlus?: boolean }> = ({ 
  code, 
  hasIssue,
  hasPlus
}) => {
  return (
    <div className="flex items-center">
      <span className={`font-medium ${hasIssue ? 'text-red-600' : 'text-gray-900'}`}>
        {code}
      </span>
      {hasPlus && (
        <span className="ml-1 text-blue-500 font-medium">+</span>
      )}
      {hasIssue && (
        <span className="ml-1 text-red-500">★</span>
      )}
    </div>
  );
};

const AirportDataTable: React.FC<AirportDataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100">
              Asset
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Table
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Complete Data
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fresh Data
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                Latest available date
                <button className="ml-2 text-gray-400">
                  <ChevronDown size={14} />
                </button>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.flatMap((airport, index) => 
            airport.tables.map((table, tableIndex) => (
              <tr key={`${index}-${tableIndex}`} className="hover:bg-gray-50">
                {tableIndex === 0 && (
                  <td 
                    className="px-6 py-4 whitespace-nowrap" 
                    rowSpan={airport.tables.length}
                  >
                    <AirportCode 
                      code={airport.code} 
                      hasIssue={airport.hasIssue} 
                      hasPlus={airport.hasPlus}
                    />
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {table.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusIndicator isPositive={table.isComplete} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusIndicator isPositive={table.isFresh} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {table.latestDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AirportDataTable;