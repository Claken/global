import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import AirportDataTable from './components/AirportDataTable';
import DataTable from './components/DataTable';
import { navigationTabs, airportData, useCaseData } from './data/mockData';
import { Airport } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('Traffic');

  // Filter airport data based on active tab
  const getFilteredAirportData = (): Airport[] => {
    if (activeTab === 'Global') {
      // For Global tab, show all airports
      return airportData;
    } else {
      // For other tabs, filter airports that have data for the selected use case
      const relevantUseCase = useCaseData.find(useCase => useCase.name === activeTab);
      
      if (!relevantUseCase) return airportData;
      
      // Get airport codes with issues for this use case
      const airportCodesWithIssues = relevantUseCase.dataQualityIssues
        .filter(issue => issue.hasIssue)
        .map(issue => issue.code);
      
      // Filter airports based on the use case
      return airportData.filter(airport => {
        // Include airports that have issues in this use case
        if (airportCodesWithIssues.includes(airport.code)) return true;
        
        // Include airports that have data for this use case
        const hasRelevantData = airport.tables.some(table => {
          // For Traffic tab, check Complete Data and Fresh Data
          if (activeTab === 'Traffic') {
            return table.name.includes('Traffic');
          }
          // For other tabs, check if table name contains the tab name
          return table.name.toLowerCase().includes(activeTab.toLowerCase());
        });
        
        return hasRelevantData;
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <main className="p-8">
          <Header 
            title="Global overview - All airports" 
            description="This overview page provides a comprehensive view of assets, detailing the current state of data governance and data quality for each use case. By selecting a use case, you can review the asset's status in terms of data timeliness, completeness, and the most recent available data in the data hub."
          />
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <TabNavigation 
              tabs={navigationTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            
            {activeTab === 'Global' ? (
              // Show the global overview table with use cases
              <DataTable data={useCaseData} />
            ) : (
              // Show the airport data table filtered by the selected tab
              <AirportDataTable data={getFilteredAirportData()} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;