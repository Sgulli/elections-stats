import type { IElections } from "../../interfaces/elections.interface";
import type { IElectionsData } from "../../types";
import {
  getFemaleElectors,
  getMaleElectors,
  getTotalElectors,
} from "../../utils";

export class ElectionService implements IElections {
  constructor() {}

  async getStats(data: IElectionsData) {
    const maleElectorsStats = getMaleElectors(data);
    const femaleElectorsStats = getFemaleElectors(data);
    const totalElectorsStats = getTotalElectors(data);
    return {
      maleElectors: maleElectorsStats,
      femaleElectors: femaleElectorsStats,
      totalElectors: totalElectorsStats,
    };
  }
}
