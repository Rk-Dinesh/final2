import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '@/components/ui/Textinput';
import Card from '@/components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';





function Page5() {

    const navigate = useNavigate()
    const location = useLocation();
    const defaultValue = new URLSearchParams(location.search).get('defaultValue');
    const email = new URLSearchParams(location.search).get('email');
    // const [inputValue, setInputValue] = useState('');
    // const [checked, setChecked] = useState([]);


    const handleNext = () => {

        const updatedDefaultValue = `${defaultValue} ${checked.join(':')}`;
        navigate(`/step7?defaultValue=${updatedDefaultValue}&email=${email}`);
    };

    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
        }),
    };
    const handleCancel = () => {
        window.location.reload();
    };

    const handleBack = () => {
        navigate(-1);
    };
    // const handleChange = (e) => {
    //     if (e.target.value) {
    //         setChecked([...checked, e.target.value]);
    //         document.getElementById('defaultsize2').value = defaultValue + checked;
    //     } else {
    //         setChecked(checked.filter((item) = !item == e.target.value))
    //     }
    // }
    // const handleChange = (e) => {
    //     if (e.target.value) {
    //         setChecked(checked.concat(e.target.value));
    //         document.getElementById('defaultsize2').value = defaultValue + checked.join(':');
    //     } else {
    //         setChecked(checked.filter(item => item !== e.target.value));
    //         document.getElementById('defaultsize2').value = defaultValue + checked.join(':');
    //     }
    // }

    const [checked, setChecked] = useState([]);


    const handleChange = (e) => {
        const { value, checked: isChecked } = e.target;

        // Update the 'checked' array
        if (isChecked) {
            setChecked((prevChecked) => [...prevChecked, value]);
        } else {
            setChecked((prevChecked) => prevChecked.filter((item) => item !== value));
        }

        // Update the 'defaultsize2' element's value with the updated 'checked' array
        document.getElementById('defaultsize2').value = defaultValue + checked.join(':');
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
        }
    ];

    return (
        <div>
            <div className="flex justify-between flex-wrap items-center mb-10">
                <h4 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
                    Diagnostica Code :
                </h4>
            </div>
            <Card>
                <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="CODE :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        defaultValue={`${defaultValue}  `}

                    />
                </div>

                <div className="space-y-10 px-8 py-8">
                    <p><b>STEP 6:</b> We assign letters for the individual conditions (Pathology),<b> AND</b></p>
                    <p><b>STEP 7:</b>  The Diagnostica code would be further extended with a description of
                        the condition.</p>

                    {/* <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="Input :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                       
                    />
                    </div> */}
                    <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                        <thead className="bg-slate-200 dark:bg-slate-700">
                            <tr>
                                <th className=" table-th " >CODE</th>
                                <th className=" table-th " >CONDITION</th>
                                <th className=" table-th " >1-CLOSED</th>
                                <th className=" table-th " >2-OPEN</th>
                                <th className=" table-th " >3-COMMINUTED</th>
                                <th className=" table-th " >4-SPIRAL</th>
                                <th className=" table-th " >5-OBLIQUE</th>
                                <th className=" table-th " >6-TRANSVERSE</th>
                            </tr>
                        </thead>
                    </table>
                    <div style={{paddingLeft: "20px"}}>

                        <div className="grid grid-cols-8 gap-6 mb-6">
                            <p>A</p>
                            <p>Fracture</p>
                            <label>
                                <input type="checkbox" name="A1" value='A1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A2" value="A2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A3" value="A3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A4" value="A4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A5" value='A5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A6" value='A6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>B</p>
                            <p>Stress</p>
                            <label>
                                <input type="checkbox" name="B1" value='B1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B2" value="B2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B3" value="B3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B4" value="B4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B5" value='B5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B6" value='B6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>C</p>
                            <p>Dislocation</p>
                            <label>
                                <input type="checkbox" name="C1" value='C1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C2" value="C2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C3" value="C3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C4" value="C4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C5" value='C5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C6" value='C6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>D</p>
                            <p>Subluxation</p>
                            <label>
                                <input type="checkbox" name="D1" value='D1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D2" value="D2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D3" value="D3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D4" value="D4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D5" value='D5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D6" value='D6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>E</p>
                            <p>Partial Tear</p>
                            <label>
                                <input type="checkbox" name="E1" value='E1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E2" value="E2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E3" value="E3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E4" value="E4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E5" value='E5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E6" value='E6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>F</p>
                            <p>Complete Tear</p>
                            <label>
                                <input type="checkbox" name="F1" value='F1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F2" value="F2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F3" value="F3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F4" value="F4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F5" value='F5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F6" value='F6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>G</p>
                            <p>Tendinopathy</p>
                            <label>
                                <input type="checkbox" name="G1" value='G1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G2" value="G2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G3" value="E3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G4" value="G4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G5" value='G5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G6" value='G6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>H</p>
                            <p>Osteoarthiritis</p>
                            <label>
                                <input type="checkbox" name="H1" value='H1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H2" value="H2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H3" value="H3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H4" value="H4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H5" value='H5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H6" value='H6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>I</p>
                            <p>Inflammatory Arthiritis</p>
                            <label>
                                <input type="checkbox" name="I1" value='I1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I2" value="I2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I3" value="I3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I4" value="I4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I5" value='I5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I6" value='I6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>J</p>
                            <p>Infection</p>
                            <label>
                                <input type="checkbox" name="J1" value='J1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J2" value="J2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J3" value="J3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J4" value="J4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J5" value='J5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J6" value='J6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>K</p>
                            <p>Coalition</p>
                            <label>
                                <input type="checkbox" name="K1" value='K1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K2" value="K2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K3" value="K3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K4" value="K4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K5" value='K5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K6" value='K6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>L</p>
                            <p>Congenital</p>
                            <label>
                                <input type="checkbox" name="L1" value='L1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L2" value="L2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L3" value="L3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L4" value="L4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L5" value='L5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L6" value='L6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>M</p>
                            <p>Amputation</p>
                            <label>
                                <input type="checkbox" name="M1" value='M1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M2" value="M2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M3" value="M3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M4" value="M4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M5" value='M5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M6" value='M6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>N</p>
                            <p>Deformity</p>
                            <label>
                                <input type="checkbox" name="N1" value='N1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N2" value="N2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N3" value="N3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N4" value="N4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N5" value='N5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N6" value='N6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>O</p>
                            <p>Maligant Tumor</p>
                            <label>
                                <input type="checkbox" name="O1" value='O1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O2" value="O2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O3" value="O3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O4" value="O4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O5" value='O5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O6" value='O6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>P</p>
                            <p>Benign Tumor</p>
                            <label>
                                <input type="checkbox" name="P1" value='P1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P2" value="P2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P3" value="P3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P4" value="P4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P5" value='P5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P6" value='P6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>Q</p>
                            <p>Ingrowing toenail</p>
                            <label>
                                <input type="checkbox" name="Q1" value='Q1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q2" value="Q2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q3" value="Q3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q4" value="Q4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q5" value='Q5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q6" value='Q6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>R</p>
                            <p>Neuroma</p>
                            <label>
                                <input type="checkbox" name="R1" value='R1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R2" value="R2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R3" value="R3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R4" value="R4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E5" value='R5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R6" value='R6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>S</p>
                            <p>Neuritis</p>
                            <label>
                                <input type="checkbox" name="S1" value='S1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S2" value="S2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S3" value="S3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S4" value="S4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S5" value='S5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S6" value='S6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>T</p>
                            <p>Charcot</p>
                            <label>
                                <input type="checkbox" name="T1" value='T1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T2" value="T2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T3" value="T3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T4" value="T4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T5" value='T5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T6" value='T6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>U</p>
                            <p>Ulcer</p>
                            <label>
                                <input type="checkbox" name="U1" value='U1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U2" value="U2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U3" value="U3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U4" value="U4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U5" value='U5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U6" value='U6' onChange={handleChange} />
                            </label>
                        </div>
                        </div>


                </div>

                <div className="flex justify-around">
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

export default Page5