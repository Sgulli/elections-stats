import type { IElectionsData } from "../types";

export interface IElections {
  getStats(
    data: IElectionsData
  ): Promise<{
    totalElectors: number;
    maleElectors: number;
    femaleElectors: number;
  }>;
}
