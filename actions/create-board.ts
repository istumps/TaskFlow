"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import {z} from "zod";

export type State ={
  errors?:{
    title?: string[]
  },
  message?: string | null
}
const CreateBoard = z.object({
  title : z.string().min(3,{
    message: "Title must be atleast 3 characters long"
  
  })
});
export async function create(formData:FormData) {

    const {title} = CreateBoard.parse({
      title: formData.get("title")
    });

    await db.board.create({
      data: {
        title: title
      }
    });
    revalidatePath("/organization/org_2f18CywsPaiQbRp2qfOZ6K0FRyQ")

  }