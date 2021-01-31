import React from 'react'
;
const MovieCreateForm = (props) => {

    const defaultState = {
        name:'', description:'',rating:'',image:'',cover:'',genre:''
    };
    const formState = props.initialState ? props.initialState : defaultState;
    const [form,setForm] = React.useState(formState)
    const changeHandler = (event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setForm({
            ...form,
            [name]:value
        });
    }
    const handleMultipleOption = (event)=>{
        const {options} = event.target;
        const len = options.length;
        let value = [];
        for(let i=0 ; i< len;i++)
        {
            if(options[i].selected)
            {
                value.push(options[i].value);
            }
        }
        setForm({
            ...form,
            genre: value.toString()
        })
    }
    const submitForm = (event)=>{
        event.preventDefault();
        props.submitFormData(form);
    }
    return (
        <div>
            {JSON.stringify(form)}
             <form>
             <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control"
            id="name" aria-describedby="emailHelp" 
            placeholder="Lord of the Rings" 
            value={form.name}
            onChange={changeHandler}
            name="name"/>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control"
            id="description" placeholder="Somewhere in Middle-earth..."
            value={form.description}
            onChange={changeHandler}
            name="description" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Rating</label>
            <input type="number" max="5" min="0" className="form-control"
            id="rating" placeholder="3" 
            value={form.rating}
            onChange={changeHandler}
            name="rating"/>
            <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="text" className="form-control" id="image" 
            placeholder="http://....." 
            value={form.image}
            onChange={changeHandler}
            name="image"/>
        </div>
        <div className="form-group">
            <label htmlFor="cover">Cover</label>
            <input type="text" className="form-control"
            id="cover" placeholder="http://......"
            value={form.cover}
            onChange={changeHandler}
            name="cover" />
        </div>
        <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select multiple className="form-control" id="genre"

            onChange={handleMultipleOption}
            name="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
            </select>
        </div>
        <button type="button"
         onClick={submitForm}
          className="btn btn-primary">
              {props.submitButtonText || "Create"}</button>
        </form>
        </div>
    );
}

export default MovieCreateForm
