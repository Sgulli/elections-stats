import Decimal from "decimal.js";
import type { IFemaleElectors, IMaleElectors, ITotalElectors } from "../types";

export function getFemaleElectors(data: IMaleElectors) {
  const { maleElectors, totalElectors } = data;
  return new Decimal(maleElectors)
    .dividedBy(totalElectors)
    .times(100)
    .toNumber();
}

export function getMaleElectors(data: IFemaleElectors) {
  const { femaleElectors, totalElectors } = data;
  return new Decimal(femaleElectors)
    .dividedBy(totalElectors)
    .times(100)
    .toNumber();
}

export function getTotalElectors(data: ITotalElectors) {
  const { totalElectors, maleElectors, femaleElectors } = data;
  const tot = maleElectors + femaleElectors;
  return new Decimal(tot).dividedBy(totalElectors).times(100).toNumber();
}
