import React,{useState} from 'react';

function Contact({match,history,location}){
    const [values,setValues] = useState({
        email:"",
        pwd:""
    })
    const [ctr,setCtr]=useState(0)

    var inputHandle= (e) =>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
        
    }

    const handleCtr=()=>{
        setCtr((prev)=>prev+1)
        setCtr((prev)=>prev+1)

    }

    // console.log("match :",match)
    // console.log("history :",history)
    // console.log("location :",location)



    return(
        <div>
            <div className="container mt-5">
                <button type="submit"
                className="btn btn-secondary mb-4"
                onClick={(e)=>history.goBack()}>Back</button>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" 
                        className="form-control" 
                        name="email"
                        value={values.email}
                        onChange={inputHandle}/>

                        
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                        className="form-control" 
                        name="pwd"
                        value={values.pwd}
                        onChange={inputHandle}/>

                    </div>
            
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
                <div className="mt-5">
                    <h5>Counter value is : {ctr}</h5>
                    <button type="submit" className="btn btn-primary" onClick={handleCtr}>Counter</button>

                </div>

            
            </div>

        </div>
    )
}

export default Contact;