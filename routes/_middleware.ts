import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 627,
  site: "hackaton",
  domains: ["hackaton.deco.site"],
});