import { UseCase, Airport } from '../types';

export const useCaseData: UseCase[] = [
  {
    name: 'Traffic',
    date: '05/02/25',
    validDataCoverage: {
      valid: 11,
      invalid: 10,
      percentage: 55
    },
    dataQualityIssues: [
      { code: 'ADL', hasIssue: false },
      { code: 'ANA', hasIssue: false },
      { code: 'BEG', hasIssue: false },
      { code: 'BFS', hasIssue: false },
      { code: 'BUD', hasIssue: false },
      { code: 'CVA', hasIssue: false },
      { code: 'AMA', hasIssue: true },
      { code: 'CFE', hasIssue: true }
    ]
  },
  {
    name: 'Ops',
    date: '03/02/25',
    validDataCoverage: {
      valid: 32,
      invalid: 3,
      percentage: 90
    },
    dataQualityIssues: [
      { code: 'ADL', hasIssue: true },
      { code: 'BEG', hasIssue: false },
      { code: 'AMA', hasIssue: false }
    ]
  },
  {
    name: 'Retail',
    date: '01/02/25',
    validDataCoverage: {
      valid: 11,
      invalid: 11,
      percentage: 50
    },
    dataQualityIssues: [
      { code: 'ADL', hasIssue: false },
      { code: 'ANA', hasIssue: false },
      { code: 'BEG', hasIssue: false },
      { code: 'AMA', hasIssue: false },
      { code: 'BFS', hasIssue: true },
      { code: 'DARF', hasIssue: false },
      { code: 'CVA', hasIssue: true },
      { code: 'BUD', hasIssue: true }
    ]
  },
  {
    name: 'Finance',
    date: '31/01/25',
    validDataCoverage: {
      valid: 25,
      invalid: 4,
      percentage: 75
    },
    dataQualityIssues: [
      { code: 'ADL', hasIssue: false },
      { code: 'ANA', hasIssue: false },
      { code: 'BEG', hasIssue: false },
      { code: 'AMA', hasIssue: false }
    ]
  },
  {
    name: 'HR',
    date: '04/02/25',
    validDataCoverage: {
      valid: 27,
      invalid: 3,
      percentage: 85
    },
    dataQualityIssues: [
      { code: 'CFE', hasIssue: false },
      { code: 'CVA', hasIssue: false },
      { code: 'BEG', hasIssue: false }
    ]
  },
  {
    name: 'Communication',
    date: '08/02/25',
    validDataCoverage: {
      valid: 25,
      invalid: 5,
      percentage: 70
    },
    dataQualityIssues: [
      { code: 'ADL', hasIssue: false },
      { code: 'ANA', hasIssue: false },
      { code: 'BEG', hasIssue: false },
      { code: 'AMA', hasIssue: true },
      { code: 'AMA', hasIssue: true }
    ]
  }
];

export const navigationTabs = ['Global', 'Traffic', 'Ops', 'Retail', 'Finance', 'HR', 'Communication'];

export const airportData: Airport[] = [
  {
    code: 'ADL',
    name: 'Adelaide Airport',
    hasIssue: true,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: false,
        isFresh: true,
        latestDate: '02/02/25'
      }
    ]
  },
  {
    code: 'AERODOM',
    name: 'Aeropuertos Dominicanos',
    hasIssue: false,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: true,
        isFresh: false,
        latestDate: '30/01/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      }
    ]
  },
  {
    code: 'AMA',
    name: 'Amazonas Airport',
    hasIssue: true,
    hasPlus: true,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: false,
        isFresh: false,
        latestDate: '28/01/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: false,
        isFresh: false,
        latestDate: '27/01/25'
      }
    ]
  },
  {
    code: 'ANA',
    name: 'Anatolia Airport',
    hasIssue: false,
    hasPlus: true,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      }
    ]
  },
  {
    code: 'BEG',
    name: 'Belgrade Airport',
    hasIssue: false,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      }
    ]
  },
  {
    code: 'BFS',
    name: 'Belfast Airport',
    hasIssue: true,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: false,
        isFresh: false,
        latestDate: '29/01/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: true,
        isFresh: false,
        latestDate: '31/01/25'
      }
    ]
  },
  {
    code: 'BUD',
    name: 'Budapest Airport',
    hasIssue: false,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: true,
        isFresh: true,
        latestDate: '03/02/25'
      }
    ]
  },
  {
    code: 'CVA',
    name: 'Covalima Airport',
    hasIssue: true,
    tables: [
      {
        name: 'Traffic budget',
        isComplete: false,
        isFresh: false,
        latestDate: '28/01/25'
      },
      {
        name: 'Traffic detailed',
        isComplete: false,
        isFresh: false,
        latestDate: '28/01/25'
      }
    ]
  }
];