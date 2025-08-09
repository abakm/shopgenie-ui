
import { useRef } from 'react';
import './style.css';
export default function Search({setID}){
     const query = useRef();
     const email  = useRef()


  function post(){
    fetch('http://localhost:5000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query.current.value,
          email: email.current.value
        })
      }).then(
        response=>{
            const status = response.status;
            console.log("STATUS CODE: " ,status);
            response = response.json()
            if(status===200)
                return response
            else
                throw new Error(response);

        }
    
    ).then(data=>{
        console.log("DATA:", data)
        setID(data['query_id'])

    }).catch(error=>{
      console.error('Error:', error.message);
       setID(`❌Unable to connect to backend server`);


    });   
  }
    

  return(<div className="search-form">
        <div className="form-group">
            <label for="query">What are you looking for?</label>
            <input type="text" id="query" placeholder="e.g., Best smartphones brands in India"  ref={query}/>
        </div>
        <div className="form-group">
            <label for="email">Your Email Address</label>
            <input type="email" id="email" placeholder="your.email@example.com" ref={email}/>
        </div>
        <button class="search-btn" onClick={post}>
            <span>🚀 Search Products</span>
        </button>
</div>
  )

}