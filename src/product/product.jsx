
import './style.css';

export default function Product({name, category, content, advantages, highlights}) {
     highlights = Array.isArray(highlights) ? highlights : [];
     

return(

   <div className="product-card">
          <div className="product-header">
            <div>
                    <div className="product-title">{name}</div>
                     <span className="product-category">{category}</span>
             </div>
              </div>

                        <div className="product-content">
                            {content}
                        </div>

                        {advantages && <div className="product-pros">
                            <h4>✅ Key Advantages</h4>
                            
                            <ul className="pros-list">
                                 {advantages.map((advantage, _) => (
                                    <li>{advantage}</li>
                                    
                                    ))}
            
                            </ul>
                        </div>}

                        {highlights && <div className="product-highlights">
                             {highlights.map((highlight, _) => (
                                    <span className="highlight-tag">{highlight}</span>
                                    
                                    ))}
                        </div>
}
                    </div>

);

}