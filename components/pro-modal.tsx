import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Check, Code, File, ImageIcon, MessageSquare, Music, ThumbsUp, VideoIcon } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",

    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        
    },
]

export const ProModal = () => {
    const proModal = useProModal();
    const router = useRouter();
    const handleLeaveCommentClick = () => {
        // Redirect to the feedback page when the button is clicked
        router.push('/feedback'); // Replace '/feedback' with the actual route to your feedback page
      };

    return(
       <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose }>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                    Number of trial is over. 
                    <div className="font-semibold text-xl">
                        Thank you for using Generative Suite. 
                    </div>
                </DialogTitle>
                <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                    {
                        tools.map(
                            (tool) => (
                                <Card key={tool.label} className="p-3 border-black/5 flex items-center justify-between">
                                    <div className="flex items-center gap-x-4">
                                        <div className={cn("p-2 w-ft rounded-md", tool.bgColor)}>
                                            <tool.icon className={cn("w-6 h-6", tool.color)} />
                                        </div>

                                        <div className="font-semibold text-sm">
                                            {tool.label}
                                        </div>

                                        

                                    </div>
                                        <div>
                                            <Check className="text-primary w-5 h-5"/>
                                        </div>
                                </Card>
                            )
                        )
                    }
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button size="lg" variant="premium" className="w-full" onClick={handleLeaveCommentClick}>
                    Leave a comment
                </Button>
            </DialogFooter>
        </DialogContent>



       </Dialog>
    )
}