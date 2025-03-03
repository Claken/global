import React from 'react';
import { UseCase, DataQualityIssue } from '../types';
import { Info } from 'lucide-react';

interface DataTableProps {
  data: UseCase[];
}

const AirportTag: React.FC<{ code: string; hasIssue: boolean }> = ({ code, hasIssue }) => {
  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium mr-2 ${
        hasIssue 
          ? 'bg-red-100 text-red-800' 
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      {code}
    </span>
  );
};

const MoreIndicator: React.FC<{ count: number }> = ({ count }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
      <Info size={12} className="mr-1" />
      {count} more
    </span>
  );
};

const ProgressBar: React.FC<{ valid: number; invalid: number; percentage: number }> = ({ 
  valid, 
  invalid, 
  percentage 
}) => {
  return (
    <div className="flex items-center">
      <div className="w-48 bg-gray-200 rounded-full h-2.5 mr-4">
        <div 
          className="bg-green-500 h-2.5 rounded-l-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex items-center text-xs text-gray-500">
        <span className="text-green-600 mr-1">{valid}</span>
        <span className="text-red-500 mx-1">{invalid}</span>
        <span className="ml-4 text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
    </div>
  );
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Use case
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valid data coverage
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                Data quality issue
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((useCase, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {useCase.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {useCase.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ProgressBar 
                  valid={useCase.validDataCoverage.valid} 
                  invalid={useCase.validDataCoverage.invalid} 
                  percentage={useCase.validDataCoverage.percentage} 
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  {useCase.dataQualityIssues.slice(0, 5).map((issue, i) => (
                    <AirportTag key={i} code={issue.code} hasIssue={issue.hasIssue} />
                  ))}
                  {useCase.dataQualityIssues.length > 5 && (
                    <MoreIndicator count={useCase.dataQualityIssues.length - 5} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;