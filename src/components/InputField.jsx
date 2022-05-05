import React from 'react'
import {useState} from 'react';

function InputField() {
    const [email, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The e-mail where you will get notifications: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label><i>Enter your e-mail here if you want to get daily notifications:</i><br/>
        <input style={{marginRight:20, marginTop:10}}
          type="email" 
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

export default InputField
