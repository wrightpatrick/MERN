import React, {useState} from 'react';


const Form = () => {
    const [search, setSearch] = useState([])
    const [searchId, setSearchId] = useState('')
    const [form, setForm] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setSearch([...search,form]);
        setSearchId([...searchId,form]);
        setForm('');
  }

  return(
    
    <div className='container'>
      <h1 className='display-1'>Star Wars Search</h1>
        <form onSubmit={onSubmitHandler} className='form'>
            <select className='form-select' onChange={(event)=>setForm(event.target.value)}>
                <option value='people'>People</option>
                <option value='planets'>Planets</option>
                <option value='ships'>Ships</option>
            </select>
            <input type='number' className='form-number' onChange={(event)=>setForm(event.target.value)}>ID</input>
            <input type='submit' className='btn btn-outline-success'>Search</input>
        </form>
    </div>
  )
}

export default Form;