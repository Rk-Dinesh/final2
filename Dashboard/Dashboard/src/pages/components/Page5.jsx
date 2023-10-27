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
        const [inputValue, setInputValue] = useState('');

        const handleNext = () => {
           
            const updatedDefaultValue = `${defaultValue} ${inputValue}`;
            navigate(`/test6?defaultValue=${updatedDefaultValue}`);
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

    const buttons = [
        {
            title: "Cancel",
            onClick : handleCancel
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
                        defaultValue={`${defaultValue} ${inputValue}`}
                         
                    />
                </div>

                <div className="space-y-10 px-8 py-8">
                    <p><b>STEP 6:</b> We assign letters for the individual conditions (Pathology),<b> AND</b></p>
<p><b>STEP 7:</b>  The Diagnostica code would be further extended with a description of 
the condition.</p>

<div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="Input :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                       
                    />
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