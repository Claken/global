export interface DataQualityIssue {
  code: string;
  hasIssue: boolean;
}

export interface UseCase {
  name: string;
  date: string;
  validDataCoverage: {
    valid: number;
    invalid: number;
    percentage: number;
  };
  dataQualityIssues: DataQualityIssue[];
}

export interface Airport {
  code: string;
  name: string;
  hasIssue: boolean;
  hasPlus?: boolean;
  tables: AirportTable[];
}

export interface AirportTable {
  name: string;
  isComplete: boolean;
  isFresh: boolean;
  latestDate: string;
}