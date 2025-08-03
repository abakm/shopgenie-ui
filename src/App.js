import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div class="chat-container">
        <div class="chat-header">
            <h1>🔍 Product Search Assistant</h1>
            <p>Find the best products with AI-powered recommendations</p>
        </div>

        <div class="chat-body">
            <div class="search-form">
                <div class="form-group">
                    <label for="query">What are you looking for?</label>
                    <input type="text" id="query" placeholder="e.g., Best smartphones brands in India" value="Best smartphones brands in india"/>
                </div>
                <div class="form-group">
                    <label for="email">Your Email Address</label>
                    <input type="email" id="email" placeholder="your.email@example.com" value="akhilakmgb@gmail.com"/>
                </div>
                <button class="search-btn">
                    <span>🚀 Search Products</span>
                </button>
            </div>

            <div class="results-container">
                <div class="search-status">
                    <span>✅</span>
                    <div>
                        <strong>Search Status:</strong> Searching completed<br/>
                        <strong>Query:</strong> "Best smartphones brands in india"<br/>
                        <strong>Email:</strong> akhilakmgb@gmail.com
                    </div>
                </div>

                <div class="best-product-banner">
                    <h3>🏆 Best Recommendation: Xiaomi</h3>
                    <p>Xiaomi offers high-end features at budget-friendly prices, making it an excellent value for money. Its performance and overall rating are also impressive, making it the best product in this comparison.</p>
                </div>

                <div class="products-grid">
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Vivo</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Vivo became the No. 1 smartphone brand in 2025 by leveraging its advanced camera technology, sleek designs, and affordable 5G devices.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>advanced camera technology</li>
                                <li>sleek designs</li>
                                <li>affordable 5G devices</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">camera technology: advanced</span>
                            <span class="highlight-tag">design: sleek</span>
                            <span class="highlight-tag">5G: affordable</span>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Xiaomi</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Xiaomi secured the second position in 2025 with a 13.5% market share by offering high-end features at budget-friendly prices.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>high-end features</li>
                                <li>budget-friendly prices</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">features: high-end</span>
                            <span class="highlight-tag">pricing: budget-friendly</span>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Samsung</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Samsung secured the third position in 2025 with a 12.9% market share by offering a strong mix of premium and mid-range smartphones.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>strong mix of premium and mid-range smartphones</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">product range: premium and mid-range</span>
                        </div>
                    </div>

                  
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Realme</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Realme ranked fourth in 2025 with a 12.6% market share by delivering budget-friendly smartphones with powerful performance.
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

                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">OPPO</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            OPPO secured the fifth position in 2025 with an 11.5% market share by offering stylish designs and top-tier camera technology, particularly for portrait photography.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>stylish designs</li>
                                <li>top-tier camera technology</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">design: stylish</span>
                            <span class="highlight-tag">camera technology: top-tier</span>
                        </div>
                    </div>

                  
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Apple</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Apple secured the sixth position in 2025 with a 6.7% market share by maintaining its reputation for premium build quality and a seamless ecosystem.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>premium build quality</li>
                                <li>seamless ecosystem</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">build quality: premium</span>
                            <span class="highlight-tag">ecosystem: seamless</span>
                        </div>
                    </div>

                   
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Motorola</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Motorola secured the seventh position in 2025 with a 6.2% market share by offering a clean stock Android experience, budget-friendly smartphones, and dependable battery life.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>clean stock Android experience</li>
                                <li>budget-friendly</li>
                                <li>dependable battery life</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">Android experience: clean stock</span>
                            <span class="highlight-tag">pricing: budget-friendly</span>
                            <span class="highlight-tag">battery life: dependable</span>
                        </div>
                    </div>

                  
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">Poco</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            Poco secured the eighth position in 2025 with a 5.7% market share by focusing on gaming-centric smartphones with high refresh rate displays and aggressive pricing.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>gaming-centric</li>
                                <li>high refresh rate displays</li>
                                <li>aggressive pricing</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">gaming features: gaming-centric</span>
                            <span class="highlight-tag">display: high refresh rate</span>
                            <span class="highlight-tag">pricing: aggressive</span>
                        </div>
                    </div>

                   
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">OnePlus</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            OnePlus secured the ninth position in 2025 with a 4.4% market share by delivering flagship-grade performance, a smooth OxygenOS experience, and a premium design.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>flagship-grade performance</li>
                                <li>smooth OxygenOS experience</li>
                                <li>premium design</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">performance: flagship-grade</span>
                            <span class="highlight-tag">OxygenOS experience: smooth</span>
                            <span class="highlight-tag">design: premium</span>
                        </div>
                    </div>

                   
                    <div class="product-card">
                        <div class="product-header">
                            <div>
                                <div class="product-title">iQOO</div>
                                <span class="product-category">Smartphone</span>
                            </div>
                        </div>

                        <div class="product-content">
                            iQOO secured the tenth position in 2025 with a 2.7% market share by targeting gaming enthusiasts with performance-driven devices.
                        </div>

                        <div class="product-pros">
                            <h4>✅ Key Advantages</h4>
                            <ul class="pros-list">
                                <li>performance-driven devices</li>
                            </ul>
                        </div>

                        <div class="product-highlights">
                            <span class="highlight-tag">gaming features: performance-driven</span>
                        </div>
                    </div>
                </div>

               
                <div class="youtube-section">
                    <h4>📺 Watch Related Video</h4>
                    <a href="https://www.youtube.com/watch?v=V1GF26b9950" target="_blank" class="youtube-btn">
                        Watch on YouTube
                    </a>
                </div>
            </div>
        </div>
    </div>
    
   
  );
}

export default App;
