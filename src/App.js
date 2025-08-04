import { useEffect, useState } from 'react';


import './App.css';
import Search from './search/search'
import Product from './product/product';

function App() {


 const [id, setID] = useState(null);
 const [status, setStatus] = useState('');
 const [query_data, setQuery_data] = useState({'status':null,' best_product':{}, 'products':[], 'youtube_link':null});

 console.log("QUERY STATUS", query_data);
 
 useEffect(()=>{
    console.log("USEEFFECT", id)
    if(!id)
        return;
    else{
    const interval = setInterval(()=>{
        console.log(`Querying:${id}`)
        fetch(`http://localhost:5000/api/get/${id}`)
        .then(response=>{
            const status = response.status;
                response = response.json()
                if(status==200)
                    return response
                else
                    throw new Error(response);
        }  
        )
        .then(data => {
            console.log(data["status"]);
            setQuery_data({"status": data["status"], 'best_product':{}, 'products':{}, 'youtube_link':null});
            if(data["status"] === "Searching completed"){
                setQuery_data({"status":data["status"], 'best_product':data['best_product'], 'products':data['products'], 'youtube_link':data['youtube_link']});
                clearInterval(interval);

            }

               

        })
    }, 1000)
     return () => clearInterval(interval);
}
 }, [id])


  return (
     <div className="chat-container">
        <div className="chat-header">
            <h1>🔍 ShopGenie Product Search Assistant</h1>
            <p>Find the best products with AI-powered recommendations</p>
        </div>

        <div className="chat-body">
            <Search setID={setID}/>

            {query_data['status'] && <div className="results-container">
                <div className="search-status">
                    <span>✅</span>
                    <div>
                        <strong>Search Status:</strong>{query_data['status']}<br/>
                    </div>
                </div>

                {query_data['status'] === "Searching completed"&& (
                     <>
                    {query_data['best_product'] && <div className="best-product-banner">
                   
                        <h3>🏆 Best Recommendation: {query_data['best_product']["product_name"]}</h3>
                        <p>{query_data['best_product']["justification"]}</p>
                     </div>}

                {query_data['products'] && query_data['products'].length > 0  && 
                <div className="products-grid">
                    {query_data['products'].map((product,_)=>{
                        
                        <Product name={product['name']}
                         category={product['category']} 
                         content={product['content']}
                         advantages={product['pros']}
                         highlights = {product['highlights']}/>
                        
                    })}


                    
                </div>}

                {query_data['youtube_link'] &&  <div className="youtube-section">
                    <h4>📺 Watch Related Video</h4>
                    <a href={query_data['youtube_link']} target="_blank" class="youtube-btn">
                        Watch on YouTube
                    </a>
                </div>
                }
                </>
                )}


                
            </div>}

        </div>
    </div>
    
   
  );
}


export default App;
