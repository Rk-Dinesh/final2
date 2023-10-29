import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import Patient_Details from "./Patient_Details";
import PCS from "./PCS";
import MOXFQ from "./MOXFQ";
import SF_36 from "./SF_36";
import Images from "./image";
import Diagnostica from "./Diagnostica";

const Viewpage = () => {

    const buttons = [
        {
            title: "Patient_Details",
        },
        {
            title: "PCS",
        },
        {
            title: "MOXFQ",
        },
        {
            title: "SF_36",
        },
        {
            title: "Images",
        },
        {
            title: "Diagnostica",
        }
    ];

    const [activeComponent, setActiveComponent] = useState(null);


    const handleButtonClick = (title) => {

        setActiveComponent(title);
    };


    return (
        <div>
            <div className="flex justify-between flex-wrap items-center mb-6">
                <h4 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
                    {/* {title} */} Patient Details
                </h4>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
                    <div className=" bg-transparent">
                        <Tab.Group>
                            <Tab.List className="lg:space-x-6 md:space-x-3 space-x-0 rtl:space-x-reverse">
                                {buttons.map((item, i) => (
                                    <Tab as={Fragment} key={i}>
                                        {({ selected }) => (
                                            <button
                                                className={` text-sm font-medium mb-7 last:mb-0 capitalize ring-0 foucs:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-150
      
      ${selected
                                                        ? "text-white bg-success-600 "
                                                        : "text-slate-500 bg-white dark:bg-slate-700 dark:text-slate-300"
                                                    }
      `}
                                                onClick={() => handleButtonClick(item.title)}
                                            >
                                                {item.title}
                                            </button>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </Tab.Group>
                    </div>
                </div>
            </div>
            {activeComponent === "PCS" && <PCS />}
            {activeComponent === "MOXFQ" && <MOXFQ />}
            {activeComponent === "SF_36" && <SF_36 />}
            {activeComponent === "Patient_Details" && <Patient_Details />}
            {activeComponent === "Images" && <Images />}
            {activeComponent === "Diagnostica" && <Diagnostica />}

                                            

        </div>

    );
};

export default Viewpage;
