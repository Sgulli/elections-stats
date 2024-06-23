import { Elysia, t } from "elysia";
import type { IElectionsData } from "../../types";
import { ElectionService } from "../../services/elections";

export default new Elysia().group(
  "/elections",
  {
    body: t.Object({
      totalElectors: t.Number(),
      totalMales: t.Number(),
      totalFemales: t.Number(),
      maleElectors: t.Number(),
      femaleElectors: t.Number(),
    }),
  },
  (app) =>
    app.post("/", ({ body }: { body: IElectionsData }) =>
      new ElectionService().getStats(body)
    )
);
