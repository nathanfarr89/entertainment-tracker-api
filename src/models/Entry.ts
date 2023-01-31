import { builder } from "../builder";

builder.prismaObject("Entry", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    format: t.exposeString("format"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});
