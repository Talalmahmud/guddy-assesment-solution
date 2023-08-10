import React, { useEffect, useRef, useState } from "react";
import buttonList from "./propertyType.json";
import Card from "./components/Card";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const App = () => {
    const [content, setContent] = useState([]);
    const [match, setMatch] = useState("");
    const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
    const [scrollRightVisible, setScrollRightVisible] = useState(true); // Initially assuming you can scroll right
    const scrollRef = useRef(null);
    // const [hideFilter, setHideFilter] = useState(false);

    // const hideFilterButton = () => {
    //     setHideFilter(!hideFilter);
    // };

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            setScrollLeftVisible(container.scrollLeft > 0);
            setScrollRightVisible(
                container.scrollLeft <
                    container.scrollWidth - container.clientWidth
            );
        }
    };

    const scrollControllLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 100;
            handleScroll(); // Update visibility after scrolling
        }
    };

    const scrollControllRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 100;
            handleScroll(); // Update visibility after scrolling
        }
    };

    // const scrollControllLeft = () => {
    //     console.log(scrollRef.current);
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollLeft -= 100;
    //     }
    // };
    // const scrollControllRight = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollLeft += 100;
    //     }
    // };
    const contentChangeOnClick = async (value) => {
        if (match === value) {
            const res = await fetch(
                `https://dev.ghuddy.link/api/v1/open/hotels`
            );
            const resData = await res.json();
            setMatch("");
            setContent(resData.esHotelCardList);
        } else {
            const res = await fetch(
                `https://dev.ghuddy.link/api/v1/open/hotels?propertyType=${value}`
            );
            const resData = await res.json();
            setMatch(value);
            setContent(resData.esHotelCardList);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://dev.ghuddy.link/api/v1/open/hotels"
            );
            const resData = await res.json();
            console.log(resData);
            setContent(resData.esHotelCardList);
        };
        fetchData();
    }, []);
    return (
        <div className="p-4 w-full text-textColor font-poppins ">
            <h2 className=" text-[22px] font-bold">Hotels</h2>
            {/* <div>
                <button onClick={hideFilterButton}>Hide Filter</button>
            </div> */}
            {/* header button */}
            <div className="flex gap-x-2 w-full overflow-x-auto scroll-smooth mt-2">
                {buttonList.map((item, index) => (
                    <button
                        className={` flex flex-col  items-center  hover:bg-hoverColor p-2 ${
                            match === item.value
                                ? "shadow-lg bg-hoverColor rounded-md"
                                : "bg-bodyBg"
                        }`}
                        key={index}
                        onClick={() => contentChangeOnClick(item.value)}
                    >
                        <div className=" ">
                            <img
                                src={item.iconUrl}
                                alt={item.label}
                                height={20}
                                width={20}
                            />
                        </div>

                        <ul className=" mt-2 text-center text-[12px]">
                            {item.label.split(" ").map((item, index) => (
                                <li className="font-semibold" key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </button>
                ))}
            </div>
            <h2 className=" text-[22px] font-bold mt-4">Top Hotels</h2>
            {/* <div className=" flex gap-x-2 w-full sm:w-full whitespace-nowrap overflow-x-auto scroll-smooth mt-2">
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
            </div> */}{" "}
            {/* slider button */}
            <div className=" relative h-20">
                <button
                    onClick={scrollControllLeft}
                    className={` top-[50%] left-2 absolute ${
                        scrollLeftVisible ? "visible" : "hidden"
                    }`}
                >
                    <HiArrowLongLeft size={20} />
                </button>
                <button
                    onClick={scrollControllRight}
                    className={` top-[50%] right-2 absolute ${
                        scrollRightVisible ? "visible" : "hidden"
                    }`}
                >
                    <HiArrowLongRight size={20} />
                </button>
            </div>
            {/* Content card */}
            <div
                ref={scrollRef}
                className="flex gap-x-4 w-full sm:w-full whitespace-nowrap overflow-x-auto scroll-smooth mt-2 "
            >
                {content.length !== 0 ? (
                    content.map((item, index) => <Card key={index} {...item} />)
                ) : (
                    <h2 className=" h-[200px] text-lg font-semibold w-full flex justify-center items-center">
                        ..........Nothing to find..........
                    </h2>
                )}
            </div>
        </div>
    );
};

export default App;
