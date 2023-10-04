"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "./card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./progress";
import { Button } from "./button";
import { ThumbsUp, Zap } from "lucide-react";

interface FreeCounterProps {
    apiLimitCount: number;
}

export const FreeCounter = ({apiLimitCount=0}: FreeCounterProps) => {
     
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true)
    }, []);

    if (!mounted) 
    
    {
        return null;
    }

    return(
        <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} 
            </p>
            <Progress className="h-3" value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button className="w-full" variant="premium">
            Free Generations
          </Button>
        </CardContent>
      </Card>
    </div>
    )
}