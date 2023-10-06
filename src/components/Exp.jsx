import React, { useState } from "react";

export const Exp=()=>{
    const [fname, setFname]= useState("")
    const [lname, setLname]= useState("")
    const [mobile, setMobile]= useState("")
    const [email, setEmail]= useState("")
    const [city, setCity]= useState("")
    const [pincode, setPincode]= useState("")

    return(
        <div className="main">
            <div className="form">
                <input type="text" placeholder="Enter First Name" onChange={(e) => setFname(e.target.value)} />
                <input type="text"  placeholder="Enter last Name"onChange={(e) => setLname(e.target.value)} />
                <input type="text"  placeholder="Enter Mobile Number" onChange={(e) => setMobile(e.target.value)} />
                <input type="text"  placeholder="Enter Email id" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Enter City " onChange={(e) => setCity(e.target.value)} />
                <input type="text"  placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)} />

            </div>
            <div className="output">
                <span>Personal Details</span>
                <h2>First Name-{fname} {lname}</h2>
                <h2>Mobile No-{mobile}</h2>
                <h2>Email id-{email}</h2>
                <h2>City-{city}</h2>
                <h2>Pincode- {pincode}</h2>
            </div>
        </div>
    )
}