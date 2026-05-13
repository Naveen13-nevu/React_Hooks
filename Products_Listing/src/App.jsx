import { useState } from "react";

const productData = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 79999, img: "📱" },
  { id: 2, name: "MacBook Pro", category: "Laptop", price: 129999, img: "💻" },
  { id: 3, name: "AirPods Pro", category: "Audio", price: 24999, img: "🎧" },
  { id: 4, name: "Samsung TV", category: "TV", price: 54999, img: "📺" },
  { id: 5, name: "iPad Air", category: "Tablet", price: 59999, img: "📟" },
  { id: 6, name: "Sony Camera", category: "Camera", price: 89999, img: "📷" },
  { id: 7, name: "Nike Shoes", category: "Footwear", price: 8999, img: "👟" },
  { id: 8, name: "Gaming Chair", category: "Furniture", price: 15999, img: "🪑" },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filtered = productData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="page">
      <h2>🛒 Product Listing</h2>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search products or category..."
        />
        {search && <button onClick={() => setSearch("")}>✕</button>}
      </div>

      <p className="result-count">{filtered.length} products found</p>

      {cart.length > 0 && (
        <div className="cart-bar">🛒 Cart: {cart.length} item(s) added</div>
      )}

      {filtered.length === 0 ? (
        <div className="empty">No products found for "{search}"</div>
      ) : (
        <div className="product-grid">
          {filtered.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-img">{p.img}</div>
              <div className="product-info">
                <h4>{p.name}</h4>
                <span className="category">{p.category}</span>
                <p className="price">₹{p.price.toLocaleString()}</p>
                <button className="btn-primary small" onClick={() => addToCart(p)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
