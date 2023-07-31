import React, {useState} from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const hendlInput = (event) => {
        event.preventDefault()
        console.log(name);
        setName('')
    }
    const hendName = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={hendlInput}>
                <input value={name} type="text" onChange={hendName}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;