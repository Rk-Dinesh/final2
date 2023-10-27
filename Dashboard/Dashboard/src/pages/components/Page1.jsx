import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '@/components/ui/Textinput';
import Card from '@/components/ui/Card';
import { useLocation } from 'react-router-dom';
import Select from "react-select";




function Page1() {
    const navigate = useNavigate(); 
   
    const location = useLocation();
    const defaultValue = new URLSearchParams(location.search).get('defaultValue');
    const [originalDefaultValue, setOriginalDefaultValue] = useState(defaultValue);
    const [selectedDisease, setSelectedDisease] = useState(null);

    const disease = [
        { value: ": A :", label: "Acute(A)" },
        { value: ": C :", label: "Chronic (C)" },
        { value: ": T :", label: "Traumatic (T)" },
        { value: ": I :", label: "Infective (I)" },
        { value: ": M/E :", label: "Metabolic/Endocrine (M/E)" },
        { value: ": F :", label: "Inflammatory (F)" },
        { value: ": D :", label: "Degenerative (D)" },
        { value: ": G :", label: "Iatrogenic (G)" },
        { value: ": P :", label: "Idiopathic (P)" },

    ];


    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
        }),
    };

    useEffect(() => {
        setOriginalDefaultValue(defaultValue);
      }, [defaultValue]);

    const handleDiseaseChange = (selectedOption) => {
        setSelectedDisease(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        document.getElementById('defaultsize2').value = defaultValue + newDefaultValue;
      };

      const handleNext = () => {
        const newDefaultValue = selectedDisease ? selectedDisease.value : "";
        const combinedDefaultValue = defaultValue + newDefaultValue;
        navigate(`/step3?defaultValue=${combinedDefaultValue}`);
      };   
      
      const handleCancel = () => {
        window.location.reload(); 
      };

      const handleBack = () => {
        // Navigate back to the previous page
        navigate(-1);
    };

    const buttons = [
        {
          title: "Cancel",
          onClick: handleCancel,
        },
       
        {
          title: "Back",
          onClick: handleBack, 
        },
        {
          title: "Next",
          onClick: handleNext,
        },
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
                        defaultValue={defaultValue} 
                    />
                </div>

                <div className="space-y-10 px-8 py-8">
                    <p><b>STEP 2:</b> We assign a designator for aetiology.</p>
                    <Select
                        className="react-select"
                        classNamePrefix="select"
                        
                        options={disease}
                        onChange={handleDiseaseChange}
                        styles={styles}
                        id="hh"
                    />
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

export default Page1