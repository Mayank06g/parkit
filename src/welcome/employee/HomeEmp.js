import React from "react";
import { useState, useEffect } from "react";
import './HomeEmp.css';
import { FormGroup, Label, Input } from 'reactstrap'
const Emp = () => {


    const initialValues = {
        name: "",
        empid: "",
        vehicletype: "",
        vehiclenumber: "",
        description: "",
        startdate: "",
        enddate: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            alert('done')
            console.log(formValues);
        }
    }, [formErrors]);

    const [userName] = useState('kohler')
    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.empid) {
            errors.empid = "Employee Id is required";
        }
        if (!values.vehicletype) {
            errors.vehicletype = "Vehicle Type is required";
        }
        if (!values.vehiclenumber) {
            errors.vehiclenumber = "Vehicle Number is required";
        }
        if (!values.description) {
            errors.description = "Description is required";
        }
        if (!values.startdate) {
            errors.startdate = "Start Date is required";
        }
        if (!values.enddate) {
            errors.enddate = "End Date is required";
        }
        return errors;
    };

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <h1> Welcome {userName}</h1>
                <div className="ui divider"></div>
                <div className="ui form">

                    <div className="field">
                        <label>Employee Name</label>
                        <p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Employee Name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <p>{formErrors.name}</p>
                        </p>

                    </div>

                    <div className="field">
                        <label>Employee Id</label>
                        <p>
                            <input
                                type="text"
                                name="empid"
                                placeholder="Employee Id"
                                value={formValues.empid}
                                onChange={handleChange}
                            />
                            <p>{formErrors.empid}</p>
                        </p>

                    </div>

                    <FormGroup  className="field">
                        <Label>
                        Vehicle Type
                        </Label>
                        <Input
                           
                            name="vehicletype"
                            type="select"
                            value={formValues.vehicletype}
                            onChange={handleChange}

                        >
                            <option>
                                4 wheeler
                            </option>
                            <option>
                                2 wheeler
                            </option>

                        </Input>
                    </FormGroup>
                    <div className="field">
                        <label> Vehicle Number </label>
                        <p>
                            <input
                                type="text"
                                name="vehiclenumber"
                                placeholder=" Vehicle Number "
                                value={formValues.vehiclenumber}
                                onChange={handleChange}
                            />
                            <p>{formErrors.vehiclenumber}</p>
                        </p>

                    </div>

                    <div className="field">
                        <label> Description </label>
                        <p>
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formValues.description}
                                onChange={handleChange}
                            />
                            <p>{formErrors.description}</p>
                        </p>

                    </div>
                    <div className="field">
                        <label> Start Date </label>
                        <p>
                            <input
                                type="date"
                                name="startdate"
                                placeholder="Start Data"
                                value={formValues.startdate}
                                onChange={handleChange}
                            />
                            <p>{formErrors.startdate}</p>
                        </p>

                    </div>
                    <div className="field">
                        <label> End Date </label>
                        <p>
                            <input
                                type="date"
                                name="enddate"
                                placeholder="End Data"
                                value={formValues.enddate}
                                onChange={handleChange}
                            />
                            <p>{formErrors.enddate}</p>
                        </p>

                    </div>

                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );




    // const [userName, setUserName] = useState('Kohler')

    // const initialValues = {
    //     name: "",
    //     empid: "",
    //     vehicletype: "",
    //     vehiclenumber: "",
    //     description: "",
    //     startdate: "",
    //     enddate: ""
    // };
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);

    // };

    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       alert('done')
    //         console.log(formValues);
    //     }
    // }, [formErrors]);

    // const validate = (values) => {
    //     const errors = {};


    //     if (!values.name) {
    //         errors.name = "Name is required!";
    //     } 
    //     if (!values.empid) {
    //         errors.empid = "Employee Id is required";
    //     } 
    //     if (!values.vehicletype) {
    //         errors.vehicletype = "Vehicle Type is required";
    //     } 
    //     if (!values.vehiclenumber) {
    //         errors.vehiclenumber = "Vehicle Number is required";
    //     } 
    //     if (!values.description) {
    //         errors.description = "Description is required";
    //     }
    //     if (!values.startdate) {
    //         errors.startdate = "Start Date is required";
    //     }
    //     if (!values.enddate) {
    //         errors.enddate = "End Date is required";
    //     }
    //     return errors;
    // };

    // return (

    //     <div className="container" >

    //         <div>
    //             <h3>welcome {userName}</h3>
    //         </div>
    //         <form onSubmit={handleSubmit}>

    //             <div className="field">
    //                 <label >
    //                     Employee Name
    //                 </label>
    //                 <input

    //                     name="name"
    //                     placeholder=" Employee Name"
    //                     type="text"
    //                     value={formValues.name}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="field">
    //                 <label >
    //                     Employee Id
    //                 </label>
    //                 <input

    //                     name="empid"
    //                     placeholder=" Employee Id"
    //                     type="Text"
    //                     value={formValues.empid}
    //                     onChange={handleChange}
    //                 />
    //             </div>

    //             <div className="field">
    //                 <label>
    //                     Vehicle type
    //                 </label>
    //                 <input

    //                     name="vehicletype"
    //                     type="select"
    //                     value={formValues.vehicletype}
    //                     onChange={handleChange}
    //                 >
    //                     <option>
    //                         4 wheeler
    //                     </option>
    //                     <option>
    //                         2 wheeler
    //                     </option>
    //                 </input>
    //             </div>
    //             <div className="field">
    //                 <label >
    //                     Vehicle Number
    //                 </label>
    //                 <input

    //                     name="vehiclenumber"
    //                     placeholder="Vehicle Number"
    //                     type="text"
    //                     value={formValues.vehiclenumber}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="field">
    //                 <label >
    //                     Description
    //                 </label>
    //                 <input

    //                     name="description"
    //                     placeholder="Description"
    //                     type="text"
    //                     value={formValues.description}
    //                     onChange={handleChange}
    //                 />
    //             </div>

    //             <div className="field">
    //                 <label >
    //                     Start Date
    //                 </label>
    //                 <input

    //                     name="startdate"
    //                     placeholder="date placeholder"
    //                     type="date"
    //                     value={formValues.startdate}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="field">
    //                 <label>
    //                     End Date
    //                 </label>
    //                 <input

    //                     name="enddate"
    //                     placeholder="date placeholder"
    //                     type="date"
    //                     value={formValues.enddate}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //              <div>
    //             <button  className="fluid ui button blue">Submit</button>
    //         </div>
    //         </form>


    //     </div>
    // )
}
export default Emp;