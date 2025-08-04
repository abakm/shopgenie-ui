


export default function Product({name, category, content, advantages, highlights}) {

return(

   <div class="product-card">
          <div class="product-header">
            <div>
                    <div class="product-title">{name}</div>
                     <span class="product-category">{category}</span>
             </div>
              </div>

                        <div class="product-content">
                            {content}
                        </div>

                        {advantages && <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            
                            <ul class="pros-list">
                                 {advantages.map((advantage, _) => (
                                    <li>{advantage}</li>
                                    
                                    ))}
            
                            </ul>
                        </div>}

                        {highlights && <div class="product-highlights">
                             {highlights.map((highlight, _) => (
                                    <span class="highlight-tag">{highlight}</span>
                                    
                                    ))}
                        </div>
}
                    </div>

);

}