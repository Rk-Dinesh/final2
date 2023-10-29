import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '@/components/ui/Textinput';
import Card from '@/components/ui/Card';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { useLocation } from 'react-router-dom';
import MobileLogo from "@/assets/img1.png";
import Image2 from "@/assets/img2.png";
import Image3 from "@/assets/img3.png";
import Image4 from "@/assets/img4.png";
import Image5 from "@/assets/img5.png";






function Page3() {

    const navigate = useNavigate();
    const location = useLocation();
    const defaultValue = new URLSearchParams(location.search).get('defaultValue');
    const email = new URLSearchParams(location.search).get('email');

    const [Img11, setImg11] = useState(null)
    const [Img12, setImg12] = useState(null)
    const [Img13, setImg13] = useState(null)
    const [Img14, setImg14] = useState(null)
    const [Img15, setImg15] = useState(null)

    const Img1 = [
        { value: "(1:1) ", label: "1" },
        { value: "(2:1) ", label: "2" },
    ];

    const Img2 = [
        { value: "(3:2)", label: "3" },
    ];

    const Img3 = [
        { value: "(4:3)", label: "4" },
    ];
    const Img4 = [
        { value: "M1 ", label: "M1" },
        { value: "P11", label: "P11" },
        { value: "P21", label: "P21" },
        { value: "M2", label: "M2" },
        { value: "P12", label: "P12" },
        { value: "P22", label: "P22" },
        { value: "P32", label: "P32" },
        { value: "M3", label: "M3" },
        { value: "P13", label: "P13" },
        { value: "P23", label: "P23" },
        { value: "P33", label: "P33" },
        { value: "M4", label: "M4" },
        { value: "P14", label: "P14" },
        { value: "P24", label: "P24" },
        { value: "P34", label: "P34" },
        { value: "M5", label: "M5" },
        { value: "P13", label: "P13" },
        { value: "P23", label: "P23" },
        { value: "P33", label: "P33" },

    ];
    const Img5 = [
        { value: "(T1:5)", label: "T1" },
        { value: "(T4:5)", label: "T4" },
        { value: "(F:5)", label: "F" },
        { value: "(C4:5)", label: "C4" },
    ];


    const handleimg1Change = (selectedOption) => {
        setImg11(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        document.getElementById('defaultsize2').value = `${defaultValue}   ${newDefaultValue}  `;
    };
    const handleimg2Change = (selectedOption) => {
        setImg12(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        const img1Value = Img11 ? Img11.value : "";

        // Check if dropmenu 1 is selected
        if (Img11) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}  ${newDefaultValue}`;
        } else {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${newDefaultValue} `; // Without dropmenu 1
        }
    };
    const handleimg3Change = (selectedOption) => {
        setImg13(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        const img1Value = Img11 ? Img11.value : "";
        const img2Value = Img12 ? Img12.value : "";

        // Check if dropmenu 1 and dropmenu 2 are selected
        if (Img11 && Img12) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}   ${img2Value} ${newDefaultValue} `;
        } else if (Img11) {
            // Only dropmenu 1 is selected
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img1Value} ${newDefaultValue} `;
        } else if (Img12) {
            // Only dropmenu 2 is selected
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img2Value} ${newDefaultValue} `;
        } else {
            // Neither dropmenu 1 nor dropmenu 2 are selected
            document.getElementById('defaultsize2').value = `${defaultValue}  (${newDefaultValue} `;
        }
    };


    const handleimg4Change = (selectedOption) => {
        setImg14(selectedOption);
        const newDefaultValue = selectedOption.map((option) => option.value);

        const img1Value = Img11 ? Img11.value : "";
        const img2Value = Img12 ? Img12.value : "";
        const img3Value = Img13 ? Img13.value : '';



        if (Img11 && Img12 && img3Value && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${img3Value} ${newDefaultValue[0]} ${newDefaultValue[1]}${newDefaultValue[2]}`;
        } else if (Img11 && Img12 && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img1Value} ${img2Value}${newDefaultValue[0]} ${newDefaultValue[1]}${newDefaultValue[2]} `;
        }
        else if (Img11 && Img12 && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value}  ${img2Value} ${newDefaultValue[0]} ${newDefaultValue[1]} `;
        }
        else if (Img11 && Img12 && img3Value && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${img3Value} ${newDefaultValue[0]} ${newDefaultValue[1]} `;
        }
        else if (Img11 && Img12 && img3Value && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${img3Value} ${newDefaultValue[0]} `;
        }
        else if (Img11 && Img12 && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${newDefaultValue[0]} `;
        }
        else if (Img11 && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${newDefaultValue[0]} ${newDefaultValue[1]}  ${newDefaultValue[2]} `;
        }
        else if (Img11 && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${newDefaultValue[0]} ${newDefaultValue[1]}   `;
        }
        else if (Img11 && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${newDefaultValue[0]}  `;
        }
        else if (Img12 && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img2Value} ${newDefaultValue[0]} ${newDefaultValue[1]}${newDefaultValue[2]} `;
        }
        else if (Img12 && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img2Value} ${newDefaultValue[0]} ${newDefaultValue[1]} `;
        }
        else if (Img12 && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img2Value} ${newDefaultValue[0]} `;
        }
        else if (selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${newDefaultValue[0]}${newDefaultValue[1]}${newDefaultValue[2]}`;
        }
        else if (selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${newDefaultValue[0]}${newDefaultValue[1]}`;
        }
        else if (selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${newDefaultValue[0]}`;
        }

        else {
            document.getElementById('defaultsize2').value = `${defaultValue}`;
        }
    };
    const handleimg5Change = (selectedOption) => {
        setImg15(selectedOption);

        const img1Value = Img11 ? Img11.value : "";
        const img2Value = Img12 ? Img12.value : "";
        const img3Value = Img13 ? Img13.value : '';
        const img4Value = Img14 ? Img14.value : '';
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        if (Img11 && Img12 && Img13) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}  ${img2Value} ${img3Value} ${newDefaultValue} `;
        } else if (Img11 && Img12) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}  ${img2Value} ${newDefaultValue} `;
        } else if (Img11 && Img13) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img1Value}  ${img3Value} ${newDefaultValue} `;
        } else if (Img12 && Img13) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img2Value} ${img3Value} ${newDefaultValue} `;
        } else {
            document.getElementById('defaultsize2').value = defaultValue + newDefaultValue;
        }

    };

    const handleNext = () => {
        // Create an array to store selected values from dropdowns
        const selectedValues = [];

        // Add values from dropdowns to the array
        if (Img11) selectedValues.push(Img11.value);
        if (Img12) selectedValues.push(Img12.value);
        if (Img13) selectedValues.push(Img13.value);
        if (Img14) {
            selectedValues.push(`(${Img14.map((option) => option.value).join(':')}:4)`);
        }

        if (Img15) selectedValues.push(Img15.value);

        // Combine the selected values
        const combinedValues = `[${selectedValues.join(' ')}] : `;

        // Build the updated URL
        const updatedURL = `/step5?defaultValue=${defaultValue} ${combinedValues}&email=${email}`;

        // Navigate to the updated URL
        navigate(updatedURL);
    };

    const handleCancel = () => {
        window.location.reload();
    };


    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
        }),
    };
    const handleBack = () => {
        navigate(-1);
    };

    const buttons = [
        {
            title: "Cancel",
            onClick: handleCancel
        },

        {
            title: "Back",
            onClick: handleBack
        },
        {
            title: "Next",
            onClick: handleNext
        },
    ];



    return (
        <div>
            <div className="flex justify-between flex-wrap items-center mb-3">
                <h5 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
                    Diagnostica Code :
                </h5>
            </div>
            <Card>
                <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="CODE :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        defaultValue={defaultValue}
                    />
                </div>
                <div className='space-y-8 px-8 py-8' >
                <p><b>STEP 4:</b> The individual bones are categorized (labelled) as per the images below.
                        Click on the region to select.</p>
                </div>

                <div className="flex justify-around ">
                    <div>
                        <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg1Change}
                            options={Img1}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                    <div>
                        <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg2Change}
                            options={Img2}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                    <div>
                        <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg3Change}
                            options={Img3}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                    <div>
                        <img src={Image4} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            isClearable={false}
                            onChange={handleimg4Change}
                            styles={styles}
                            isMulti
                            name="colors"
                            options={Img4}
                            className="react-select"
                            classNamePrefix="select"
                            id="mul_1"
                        />
                    </div>
                    <div>
                        <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg5Change}
                            options={Img5}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                </div>
                <br />
                <br />
                   <div className='flex justify-around'>
                   {buttons.map((button, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-primary"
                            onClick={button.onClick}
                        >
                            {button.title}
                        </button>
                    ))}
                 
                </div>

            </Card >
        </div >

    );
}

export default Page3