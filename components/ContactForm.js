import React from 'react'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xyzkogzl");
    const searchParams = useSearchParams();
    const service = searchParams.get("service") ? decodeURIComponent(searchParams.get("service")).replace(/-/g, " ") : "";
    
    const toCapitalCase = (str) => {
        return str
            .split(" ") // Split into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
            .join(" "); // Join back to a string
    };
    
    const [subject, setSubject] = useState(toCapitalCase(service));
    
    useEffect(() => {
        setSubject(toCapitalCase(service));
    }, [service]);
    
    const InputStyle = {
        width: "90%",color: "#ffffff", background: "transparent", border: "1px solid #575757", padding: "14px", borderRadius: "25px", fontSize: "18px", lineHeight: "25px"
    }
    const labelStyle = { color: "#ffffff", fontSize: "16px", lineHeight: "0px", margin: "8px 0 0 0" }
    return (
        <>   {state.succeeded ? <p style={{ textAlign: 'center', marginTop: '20px' }}>Thanks! We will get back to you shortly</p> :
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", flex: 1 }}>
                <p style={labelStyle}>Your Name</p>
                <input style={InputStyle} type='text' name='name' placeholder='Name' required></input>
                <p style={labelStyle}>Your Email</p>
                <input style={InputStyle} type='text' name='email' placeholder='Email' required></input>
                <p style={labelStyle}>Subject</p>
                <input style={InputStyle} value={subject} onChange={(e) => setSubject(e.target.value)} type='text' name='subject' placeholder='Subject' required></input>
                <p style={labelStyle}>Message</p>
                <textarea style={{ height: "120px", flex: 1, resize: "none", ...InputStyle }} type='text' name='message' placeholder='Message' ></textarea>
                <button type='submit' disabled={state.submitting} style={{ padding: "14px 28px", background: "#FDC500", border: "none", borderRadius: "25px", fontWeight: 'bold', width: "max-content" }}>Get Started</button>
            </form>
        }
        </>
    )
}

export default ContactForm