"use client";
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger , DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User } from "lucide-react";
import LogOut from '../LogOut';
import Link from 'next/link';
import { typeSession } from '@/types/auth-type';
const Usermenu = ({ session }: { session: typeSession }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>
              {" "}
              <User />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4">
          <DropdownMenuLabel>
            <p className="text-md ">{session?.user?.email}</p>
            <p className="text-xs text-zinc-600">{session?.user?.name}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className=" flex flex-col md:hidden lg:hidden" />
          <div className=" flex flex-col md:hidden lg:hidden">
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/coustomer/provideras">Providers</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/AboutUs">AboutUs</Link>
            </DropdownMenuItem>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/orders">Orders</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/Contact">Contect</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/customer/dashboard/${session?.user?.id}`}>
              Dashboard
            </Link>
          </DropdownMenuItem>
              <DropdownMenuSeparator /> 
          <DropdownMenuItem>
            <LogOut />
          </DropdownMenuItem>

      
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Usermenu