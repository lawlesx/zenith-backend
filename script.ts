import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const user = await prisma.user.deleteMany()

  console.log(user);
}

main()