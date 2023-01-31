import { builder } from "../builder";

builder.prismaObject("Book", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    author: t.exposeString("author"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});
