import { checkSubscription } from "@/lib/subsription";
import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { Subscript } from "lucide-react";
import { SubscriptionButton } from "./_components/subscription-button";



const BillingPage = async () => { 
    const isPro = await checkSubscription();
    return (
        <div className="w-full ">
        <Info isPro = {isPro} />
        <Separator className="my-2"/>
        <SubscriptionButton
            isPro={isPro}
        />
        </div>
    );
    }

    export default BillingPage; 