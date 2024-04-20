"use client"
import { useState, useEffect } from "react"
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {Sheet, SheetContent} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)   
    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    useEffect(() => { //fix for hydration errors 
        setIsMounted(true) //When reaches useEffect skip if and render component
    }, []); 

    useEffect(() => { //whenever pathname changes -> close sidebar
       
          onClose()
    }, [pathname, onClose]); 

    if (!isMounted){ // if not mounted (meaning never reached initial use effect) 
                     //dont render anything because still running on server
        return null
    } 


    return (
        <>
        <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
        
        >
            <Menu className="h-4 w-4"/>
        </Button>
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
            side="left"
            className="p-2 pt-10"
            >
            <Sidebar
            storageKey="t-sidebar-mobile-state"
            />
            </SheetContent>
            
        </Sheet>
        </>
    )
}