import React,{useState} from "react";
import Axios  from 'axios';
import Navbar from "./Navbar";
const Form = () => {
   const [formInfo, setFormInfo] = useState({
      FirstName: "",
      date:"",
      leader:"",
      members:"",
      
    });
  
  
  
    const [list, setList] = useState([]);
    
    const handleChange = (e) => {
      setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setList([...list, formInfo]);
       setFormInfo({FirstName:formInfo.FirstName ,date:formInfo.date,leader:formInfo.leader,members:formInfo.members })
 
       Axios({
  
        // Endpoint to send files
        url: "http://localhost:7000/save_details",
        method: "POST",
        headers: {
    
          // Add any auth token here
          authorization: "your token comes here",
        },
    
        // Attaching the form data
        data: formInfo,
      })
        // Handle the response from backend here
        .then((res) => {
          res.send({ message: "succesfully saved", formInfo });
         })
    
        // Catch errors if any
        .catch((err) => {
          
      err.send({ message: "post error" }).status(404);
        });
        
          // axios.get(`http://localhost:7000/getDetails`)
          // .then(response => {
          //   const posts = response.formInfo;
          //   this.setState ({posts});
          // })
        
      }
  console.log('formInfo', formInfo)






  
    return (
      <div className="forms">
        <Navbar />
        <form  onSubmit={handleSubmit} className="form">
          <h1 className="label">Parliament Form </h1>
          <p>
            Hello Please <span>Enter your Parliament</span>
          </p>
          <hr />
          <label>Parliament Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="FirstName"
            value={formInfo.FirstName}
          />
          
          <br />
          <label>parliament Date</label>
          <input
            type="date"
            onChange={handleChange}
            name="date"
            value={formInfo.date}
            
          />
          <br />
          <br />
          <label>Parliament Leader</label>
          <input
            type="text"
            onChange={handleChange}
            name="leader"
            value={formInfo.leader}
            
          />
         
          <br />
          <label>Parliament Members</label>
          <input
            type="number"
            onChange={handleChange}
            name="members"
            value={formInfo.members}
          />
          <br />
          <br />
         
          <button type="submit" className="butt">
            Submit
          </button>
        </form>
        <br />
        
      </div>
    );
};

export default Form;
