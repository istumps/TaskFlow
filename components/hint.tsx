import {
    Tooltip,
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger
} from "@/components/ui/tooltip"

interface HintProps {
    children: React.ReactNode;
    description: string;
    side?: "left" | "right" | "top" | "bottom";
    sideOffset?: number;


}

export const Hint = ({
    children, 
    description, 
    side = "buttom",
    sideOffset = 0 
}: HintProps) => {
    return(
        <TooltipProvider>
            <Tooltip delayDuration={0}>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent 
            side={side} 
            sideOffset={sideOffset}
            className="text-xs max-w-[200px] break-words"
            >
                {description}
            </TooltipContent>
            </Tooltip>
        </TooltipProvider>    
        
    )
}