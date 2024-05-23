"use server"

import { auth } from "@clerk/nextjs"
import { InputType } from "./types"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { createSafeAction } from "@/lib/create-safe-action"
import {CreateBoard} from "./schema"
import { createAuditLog } from "@/lib/create-audit-logs"
import { ACTION, ENTITY_TYPE } from "@prisma/client"
import { incrementAvailbleCount, hasAvailableCount } from "@/lib/org-limit"
const handler = async (data:InputType): Promise<ReturnType> => {
  const {userId,orgId} = auth()
  if(!userId || !orgId){
    return{
      error: "Unauthorized"
    }; 
  }
  const canCreate = await hasAvailableCount();
  if(!canCreate){
    return {
      error: "You have reached the limit of free boards. Please upgrade to create more boards." 
    }
  }

  const {title, image} = data;
  const [
    imageId, 
    imageThumbUrl, 
    imageFullUrl, 
    imageLinkHTML,
    imageUserName
  ] = image.split("|");
  
  //console.log({imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName});

  if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHTML || !imageUserName){
    return {
      error: "Missing Fields Failed to create Board"
    }
  }

  let board;

  try{
    board = await db.board.create({
      data:{
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML,

        
      }
    });

    await incrementAvailbleCount();

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.CREATE,
  });

  } catch(error){
    return {
      error: "Failed to create"
    }
  }
  revalidatePath( `/board/${board.id}`)
  return {data: board}
}; 

export const createBoard = createSafeAction(CreateBoard, handler)
  