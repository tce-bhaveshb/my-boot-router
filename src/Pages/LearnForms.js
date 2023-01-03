import React from 'react';
import { useState } from 'react';

// console.log("Inside");
// Simple Form
/* export default function LearnForm(){
    return(
        <form>
            <label>Enter your name : 
            <input type="text" /></label>
        </form>
    ); 
} */

// Handling forms
/* export default function LearnForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />  
            </label>
        </form> 
    );
} */

// Use of Submit form 
export default function LearnForm() {
    console.log("Inside function");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name you entered was : ${name}`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name :</label>&nbsp;
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p/>
            <input type="submit" />
        </form>
    );
}