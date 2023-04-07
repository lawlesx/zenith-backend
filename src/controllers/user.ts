import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { log } from "console";

const UserObject = z.object({
  username: z.string().min(4),
  gender: z.enum(['MALE', 'FEMALE']),
  weight: z.number().optional(),
  height: z.number().optional(),
})

type User = z.infer<typeof UserObject>


const isUserDataValid = (input: unknown) => {
  console.log('Input', input);
  
  return UserObject.safeParse(input).success
}

export const createUser = async (req: Request, res: Response) => {

  if(!isUserDataValid(req.body)) {
    res.status(400).json({
      error: 'Incorrect request body received'
    })
    return
  }

  // const {username,gender,weight,height} = req.body as User 

  const user = await prisma.user.create({
    data: req.body
  })

  res.send(user);
}

export const getUser = async (req: Request, res: Response) => {
  const { username } = req.params;

  const user = await prisma.user.findFirst({
    where: {
      username
    }
  })

  res.send(user);
}