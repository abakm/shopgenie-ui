


export default function Product({name, category, content}) {

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

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            
                            <ul class="pros-list">
                                <li>budget-friendly</li>
                                <li>powerful performance</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">pricing: budget-friendly</span>
                            <span class="highlight-tag">performance: powerful</span>
                        </div>
                    </div>

);

}