
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const initialData = [
    { id: 1, code: 'A', condition: 'Fracture', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 2, code: 'B', condition: 'Stress Response', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 3, code: 'C', condition: 'Dislocation', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 4, code: 'D', condition: 'Subluxation', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 5, code: 'E', condition: 'Partial Tear', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 6, code: 'F', condition: 'Complete Tear', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 7, code: 'G', condition: 'Tedinopathy', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 8, code: 'H', condition: 'Osteoarthiritis', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 9, code: 'I', condition: 'Inflammatory Arthiritis', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 10, code: 'J', condition: 'Infection', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 11, code: 'K', condition: 'Coalition', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 12, code: 'L', condition: 'Congential abnormality', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 13, code: 'M', condition: 'Amputation', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 14, code: 'N', condition: 'Deformity', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 15, code: 'O', condition: 'Maligant tumour', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 16, code: 'P', condition: 'Benign tumour', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 17, code: 'Q', condition: 'Ingrowing toenail', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 18, code: 'R', condition: 'Neuroma', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 19, code: 'S', condition: 'Neuritis', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 20, code: 'T', condition: 'Charcot', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 21, code: 'U', condition: 'Ulcer', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 22, code: 'V', condition: '...', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 23, code: 'W', condition: '...', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 24, code: 'X', condition: '...', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 25, code: 'Y', condition: '...', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
    { id: 26, code: 'Z', condition: '...', userColumn1: '', userColumn2: '', userColumn3: '', userColumn4: '', userColumn5: '', userColumn6: '' },
];

const DiagnosticaUpdate = () => {
    const [tableData, setTableData] = useState(initialData);
    const [email, setEmail] = useState('');
    const { email: routeEmail } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (email) {
            axios
                .get(`http://localhost:3001/getsaveDatas?email=${email}`)
                .then((response) => {
                    if (response.data && response.data.length > 0) {
                        console.log(response.data);
                        setTableData(response.data);
                        setIsDataLoaded(true);
                    } else {
                        console.log('Email not found.');

                    }
                })
                .catch((error) => {
                    console.error('Error fetching answers:', error);

                });
        }
    }, [email]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleInputChange = (e, rowId, columnKey) => {
        const updatedData = tableData.map(row => {
            if (row.id === rowId) {
                return { ...row, [columnKey]: e.target.value };
            }
            return row;
        });
        setTableData(updatedData);
    };

    const PainManagement = () => {

        if (email === '') {
            alert('Please fill in the email field.');
            return;
        }
        const dataWithEmail = {
            email,
            tableData,
        };

        fetch('http://localhost:3001/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataWithEmail),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data saved to MongoDB:', data);
                navigate('/patient')
            })
            .catch(error => {
                console.error('Error saving data to MongoDB:', error);
            });
    };

    return (
        <div className="overflow-x-auto -mx-6">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                    <div className="space-y-3">

                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder='Patient Email'
                            value={routeEmail}
                            onChange={handleEmailChange}
                        />

                        <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                            <thead className="bg-slate-200 dark:bg-slate-700" >
                                <tr>
                                    <th className=" table-th " >CODE</th>
                                    <th className=" table-th ">CONDITION</th>
                                    <th className=" table-th ">1-CLOSED</th>
                                    <th className=" table-th ">2-OPEN</th>
                                    <th className=" table-th ">3-COMMUNICATED</th>
                                    <th className=" table-th ">4-SPIRAL</th>
                                    <th className=" table-th ">5-OBLIQUE</th>
                                    <th className=" table-th ">6-TRANSVERSE</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                                {tableData.map(row => (
                                    <tr key={row.id}>
                                        <td className="table-td" >{row.code}</td>
                                        <td className="table-td" >{row.condition}</td>
                                        <td className="table-td" >
                                            <input
                                                className="form-control shadow-none"
                                                type="text"
                                                value={row.userColumn1}
                                                onChange={e => handleInputChange(e, row.id, 'userColumn1')}
                                            />
                                        </td>
                                        <td className="table-td"  >
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={row.userColumn2}
                                                onChange={e => handleInputChange(e, row.id, 'userColumn2')}
                                            />
                                        </td>
                                        <td className="table-td" >
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={row.userColumn3}
                                                onChange={e => handleInputChange(e, row.id, 'userColumn3')}
                                            />
                                        </td>
                                        <td className="table-td" >
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={row.userColumn4}
                                                onChange={e => handleInputChange(e, row.id, 'userColumn4')}
                                            />
                                        </td>
                                        <td className="table-td" >
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={row.userColumn5}
                                                onChange={e => handleInputChange(e, row.id, 'userColumn5')}
                                            />
                                        </td>
                                        <td className="table-td" >
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={row.userColumn6}
                                                onChange={e => handleInputChange(e, row.id, 'userColumn6')}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="ltr:text-right rtl:text-left">
                            <button className="btn btn-dark text-center" onClick={PainManagement}>Save </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DiagnosticaUpdate