import React, { memo } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { BiMap } from "react-icons/bi";
import CardImageSLider from "./CardImageSLider";

const Card = ({ ...items }) => {
    return (
        <>
            <div className="h-[381px] w-[252px] bg-white rounded-md hover:drop-shadow-md">
                {/* Card image sliding section */}
                <CardImageSLider images={items.images} />

                {/*title */}
                <div className=" flex w-[252px] justify-between  px-2 py-2">
                    <p className="text-[14px] w-[175px] h-10 text-start font-semibold text-textColor whitespace-normal block">
                        {items.property_name.slice(0, 30)}
                    </p>

                    <div className=" flex gap-2">
                        <AiFillStar size={20} fill="yellow" />

                        <p className=" text-[14px] font-semibold">
                            {items.class_rating},0
                        </p>
                    </div>
                </div>

                {/* address */}
                <div className=" flex h-4 gap-2 px-2 mt-2">
                    <BiMap size={20} />
                    <p className="text-[12px] text-start text-textColor font-normal whitespace-normal block">
                        {items.short_address.slice(0, 30)}
                    </p>
                </div>

                {/* tag */}
                <div className=" flex h-[51px] gap-2 px-2 mt-2">
                    <div>
                        {" "}
                        <CiHome size={20} />
                    </div>

                    <p className="text-[12px] text-start text-textColor font-normal whitespace-normal block">
                        {items.property_tag.slice(0, 80)}
                    </p>
                </div>

                {/* checkout */}
                <div className=" flex justify-center items-center flex-col mt-2">
                    <p className=" text-[12px] font-normal">Checkout Price:</p>
                    <div>
                        <p className=" text-[14px]">{items.property_price}</p>
                        <p className=" text-[14px] font-normal">
                            12000 BDT{" "}
                            <span className=" text-[12px] line-through text-checkoutText">
                                {items.black_price}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Card);
