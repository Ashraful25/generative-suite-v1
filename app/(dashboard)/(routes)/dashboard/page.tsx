"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, PenBoxIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        herf: "/conversation"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        herf: "/image"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        herf: "/video"
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        herf: "/music"
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        herf: "/code"
    },
    {
        label: "Feed Back",
        icon: PenBoxIcon,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        herf: "/feedback"
    },
]


const DashboardPage = () => {
    const router = useRouter();

    return (
        <div>
            <div className="mb-8 space-y-4 space-x-20 ">
                <h2 className="px-20 text-2xl md:text-4xl font-bold text-left">
                    Welcome
                </h2>
                <p className=" font-regular text-sm md:text-lg text-left">
                    Experience the power of generative AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {
                    tools.map(
                        (tool) => (
                            <Card 
                            onClick={() => router.push(tool.herf)}
                            style={{ width: '100%', maxWidth: '500px' }}
                            key={tool.herf}
                            className={cn("p-4 border-black/4 flex items-center justify-between transition cursor-pointer", "hover:shadow-lg")}
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-8 h-8", tool.color)}/>
                                    </div>
                                    <div className="font-semibold">
                                        {tool.label}

                                    </div>


                                </div >
                                <div>
                                    <ArrowRight className={cn("w-8 h-8", tool.color)}/>
                                </div>
                                

                            </Card>

                        )
                    )
                }

            </div>

        </div>
    )
    }

export default DashboardPage;
