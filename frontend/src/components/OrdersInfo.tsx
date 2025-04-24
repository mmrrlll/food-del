"use client";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


const OrderInfo = ()=>{
    return (
      <div className="w-screen h-screen bg-[#F4F4F5]">
        <div className="flex w-[205px] h-screen p-9 flex-col items-start gap-10 bg-[#fff]">
          <div className="flex items-center gap-2 self-stretch">
            <div className="flex w-[40px] h-[40px] px-[3px] py-[4px] justify-center items-center gap-2.5">
              <img></img>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="font-semibold text-[18px]/[28px]">NomNom</p>
              <p className="font-normal text-[12px]/[16px]">Swift delivery</p>
            </div>
          </div>
          <div className="felx flex-col items-center gap-6 self-stretch">
            <div className="flex h-10 px-2 py-6 items-center gap-2.5 self-stretch rounded-full">
              <MdOutlineDashboard />
              <p className="font-medium text-[14px]/[20px] text-[#09090B]">
                Food menu
              </p>
            </div>
            <div className="flex h-10 px-2 py-6 items-center gap-2.5 self-stretch rounded-full bg-[#18181b]">
              <FiTruck />
              <p className="font-medium text-[14px]/[20px] text-[#09090B]">
                Orders
              </p>
            </div>
            <div className="flex h-10 px-2 py-6 items-center gap-2.5 self-stretch">
              <CiSettings />
              <p className="font-medium text-[14px]/[20px] text-[#09090B]">
                Settings
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[1171px] flex-col items-end gap-6">
          <div className="flex items-start gap-2.5 w-9 h-9">
            <div>Avatar</div>
          </div>
          <div className="flex flex-col items-start gap-0 self-stretch">
            <div className="flex p-4 justify-between items-center self-stretch border border-[#e4e4e7]"></div>
            <div className="flex items-start self-stretch ">
              <div>col1</div>
              <div>col2</div>
              <div>col3</div>
              <div>col4</div>
              <div>col5</div>
            </div>
            <div></div>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
}