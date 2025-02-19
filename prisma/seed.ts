import { prisma } from "../src/lib/db";

async function main() {
  await prisma.user.create({
    data: {
      name: "Test User",
      email: "test@example.com",
    },
  });

  console.log("User added!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
