import React from 'react'
function ContactForm() {
    // const [state, handleSubmit] = useForm("myzgvndp");
    const InputStyle = {
        width: "90%", background: "transparent", border: "1px solid #575757", padding: "14px", borderRadius: "25px", fontSize: "18px", lineHeight: "25px"
    }
    const labelStyle = { color: "#FCFCFC", fontSize: "16px", lineHeight: "0px", margin: "8px 0 0 0" }
    return (
        <>
            <form style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", flex: 1 }}>
                <p style={labelStyle}>Your Name</p>
                <input style={InputStyle} type='text' name='name' placeholder='Name' required></input>
                <p style={labelStyle}>Your Email</p>
                <input style={InputStyle} type='text' name='email' placeholder='Email' required></input>
                <p style={labelStyle}>Subject</p>
                <input style={InputStyle} type='text' name='subject' placeholder='Subject' required></input>
                <p style={labelStyle}>Message</p>
                <textarea style={{ height: "120px", flex: 1, resize: "none", ...InputStyle }} type='text' name='message' placeholder='Message' ></textarea>
                <button type='submit' style={{ padding: "14px 28px", background: "#FDC500", border: "none", borderRadius: "25px", fontWeight: 'bold', width: "max-content" }}>Get Started</button>
            </form>
        </>
    )
}

export default ContactForm