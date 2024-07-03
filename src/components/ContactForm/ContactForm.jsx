import React, { useState } from 'react'
import styles from "./Form.module.css"
import Button from '../button/Button'
import { MdMessage } from 'react-icons/md'
import { IoCallSharp } from "react-icons/io5";

function ContactForm() {
    const [fullname, setfullname] = useState("akash");
    const [email, setemail] = useState("aka");
    const [text, settext] = useState("hello");

  const onsubmit = (evt)=>{
    evt.preventDefault();

    setfullname(evt.target[0].value)
    setemail(evt.target[1].value)
    settext(evt.target[2].value)
 

  }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
            <div className={styles.Top_button}>
                <Button text="Via Chat Support " icon= {<MdMessage fontSize={24}/>}/>
                <Button 
               
                text="Via Call " icon= {<IoCallSharp  fontSize={24}/>}/>
                </div>
                <Button isoutline={true} text="Via Call " icon= {<IoCallSharp  fontSize={24}/>}/>
                <form onSubmit={onsubmit}>
                    <div className={styles.form_controller}>
                     <label htmlFor='name'>Name</label>
                    <input type='text' ></input>
                    </div>
                    <div className={styles.form_controller}>
                     <label htmlFor='Email'>Email</label>
                    <input type='text' ></input>
                    </div>
                    <div className={styles.form_controller}>
                     <label htmlFor='Message'>Message</label>
                    <textarea name='text' ></textarea>
                    </div>
                    <div 
                    
                    style={{display: "flex",
                        justifyContent:"end"}}> <Button text="Submit "/></div>
                   <div>
                     {fullname + " " + email + " " + text + ""}
                   </div>
            </form>
            </div>
           
            <div className='styles.contact_image'>
                <img src="\images\Service 24_7-pana 1.svg" alt="" />
            </div>
            
        </section>
    )
}

export default ContactForm
