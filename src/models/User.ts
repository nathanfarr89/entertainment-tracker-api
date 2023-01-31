import { builder } from "../builder";
import { prisma } from "../db";

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    messages: t.relation("messages"),
    entries: t.relation("entries"),
    books: t.relation("books"),
    games: t.relation("games"),
    movies: t.relation("movies"),
    shows: t.relation("shows"),
  }),
});
