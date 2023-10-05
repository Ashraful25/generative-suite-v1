"use client"

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
    apiLimitCount: number; 
}

const MobileSidebar = ({
    apiLimitCount
}: MobileSidebarProps) => {
    const [isMounted, setMounted] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Added state for sidebar visibility

    useEffect(
        () => {
            setMounted(true);
        }, []
    );

    if (!isMounted){
        return null;
    }

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return(
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="icon" className="md:hidden" onClick={toggleSidebar}>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className={`p-0 ${isSidebarOpen ? 'block' : 'hidden'}`} style={{ width: '90%', maxWidth: '100%' }}>


                    <Sidebar apiLimitCount={apiLimitCount} onClose={toggleSidebar} />
                
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;
