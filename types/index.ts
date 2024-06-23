export interface IElectionsData {
  totalElectors: number;
  totalMales: number;
  totalFemales: number;
  maleElectors: number;
  femaleElectors: number;
}

export interface IMaleElectors {
  totalElectors: number;
  maleElectors: number;
}

export interface IFemaleElectors {
  totalElectors: number;
  femaleElectors: number;
}

export interface ITotalElectors {
  totalElectors: number;
  maleElectors: number;
  femaleElectors: number;
}
