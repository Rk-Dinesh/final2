import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { Tab } from "@headlessui/react"; import axios from "axios";
import { useLocation } from "react-router-dom";
import Row from "@/components/ui/Row";
import Row1 from "@/components/ui/Row1";
import Row2 from "@/components/ui/Row2";
import Row3 from "@/components/ui/Row3";
import Row4 from "@/components/ui/Row4";
import Row5 from "@/components/ui/Row5";
import Row6 from "@/components/ui/Row6";
import Row7 from "@/components/ui/Row7";

const Patient_Details = () => {

    const [Data, setData] = useState([]);
    const [RowData, setRowData] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get("email");

    useEffect(() => {
        if (email) {

            axios
                .get(`http://localhost:3001/viewpatient?email=${email}`)
                .then((response) => {
                    setData(response.data);

                })
                .catch((error) => {
                    console.error("Error fetching answers:", error);
                });

            axios
                .get(`http://localhost:3001/patientinfo?email=${email}`)
                .then((response) => {
                    console.log(response.data)
                    setRowData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching Row data:", error);
                });
        }
    }, [email]);

    return (
        <div>
            <Tab.Group >
                <div className="grid gap-5 grid-cols-12">
                    <div className="xl:col-span-3 lg:col-span-4 col-span-12 card-auto-height">
                        <Card>
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Name </p>
                                    <p>: {Data.map((dataItem) => dataItem["fname"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>DOB </p>
                                    <p>: {Data.map((dataItem) => dataItem["dob"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Gender </p>
                                    <p>: {Data.map((dataItem) => dataItem["gender"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Email </p>
                                    <p>: {Data.map((dataItem) => dataItem["email"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Phone </p>
                                    <p>: {Data.map((dataItem) => dataItem["phone"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Address </p>
                                    <p>: {Data.map((dataItem) => dataItem["address"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>State </p>
                                    <p>: {Data.map((dataItem) => dataItem["state"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Postcode </p>
                                    <p>: {Data.map((dataItem) => dataItem["postcode"])}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="xl:col-span-9 lg:col-span-8 col-span-12">
                        <Tab.Panels>
                            <Tab.Panel>
                                <Row className="mb-1" data={RowData} />
                                <Row1 className="mb-1" data={RowData} />
                                <Row2 className="mb-1" data={RowData} />
                                <Row3 className="mb-1" data={RowData} />
                                <Row4 className="mb-1" data={RowData} />
                                <Row5 className="mb-1" data={RowData} />
                                <Row6 className="mb-1" data={RowData} />
                                <Row7 data={RowData} />
                            </Tab.Panel>

                        </Tab.Panels>
                    </div>
                </div>
            </Tab.Group>
        </div >
    );
};

export default Patient_Details;
