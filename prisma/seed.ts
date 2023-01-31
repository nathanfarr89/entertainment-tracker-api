import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.book.deleteMany({});
  await prisma.entry.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.message.deleteMany({});
  await prisma.movie.deleteMany({});
  await prisma.show.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: "Nate Farr",
      entries: {
        create: [
          {
            name: "The Last of Us",
            format: "TV",
          },
          {
            name: "The Menu",
            format: "Movie",
          },
        ],
      },
      books: {
        create: [
          {
            name: "The Abduction",
            author: "Shea Serrano",
          },
          {
            name: "The Girl with All the Gifts",
            author: "M.R. Carey",
          },
          {
            name: "Verses for the Dead",
            author: "Douglas Preston & Lincoln Child",
          },
          {
            name: "City of Endless Night",
            author: "Douglas Preston & Lincoln Child",
          },
          {
            name: "Blue Moon",
            author: "Lee Child",
          },
        ],
      },
      games: {
        create: [
          {
            name: "Hades",
          },
          {
            name: "Marvel Snap",
          },
          {
            name: "Outriders",
          },
          {
            name: "Fortnite",
          },
        ],
      },
      movies: {
        create: [
          {
            name: "The Menu",
          },
          {
            name: "Megan",
          },
          {
            name: "This Place Rules",
          },
        ],
      },
      shows: {
        create: [
          {
            name: "Dead to Me",
          },
          {
            name: "Doom Patrol",
          },
          {
            name: "The Rookie",
          },
          {
            name: "Abbott Elementary",
          },
          {
            name: "The Premise",
          },
          {
            name: "The Mandalorian",
          },
          {
            name: "The Walking Dead",
          },
          {
            name: "Bad Batch",
          },
          {
            name: "The Last of Us",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...");
});
