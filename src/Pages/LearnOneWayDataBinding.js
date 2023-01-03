import React, {useState} from 'react';

function LearnOneWayDataBinding() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            Enter text here : &nbsp;
            <input onChange={handleChange} value={name}/>     
            <h1>{name}</h1>
            <b>*Its an example of Two way data binding..... Search any example of One way data binding.</b>
        </div>
    )
}

export default LearnOneWayDataBinding