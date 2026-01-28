import { useState } from 'react'

export default function PasswordInput({ value, onChange, name, placeholder }) {
  const [show, setShow] = useState(false)
  
  return (
    <div className="field-row">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="show-btn"
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}
