import React from "react";
import ContentLoader from "react-content-loader";

const CartLoader = () => (
  <ContentLoader 
    speed={1}
    width={600}
    height={300}
    viewBox="0 0 800 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#cbc4c4"
  >
    {/* Table Header */}
    <rect x="10" y="10" rx="4" ry="4" width="60" height="16" />
    <rect x="90" y="10" rx="4" ry="4" width="150" height="16" />
    <rect x="260" y="10" rx="4" ry="4" width="80" height="16" />
    <rect x="360" y="10" rx="4" ry="4" width="80" height="16" />
    <rect x="460" y="10" rx="4" ry="4" width="80" height="16" />
    <rect x="560" y="10" rx="4" ry="4" width="80" height="16" />

    {/* Table Rows */}
    <rect x="10" y="40" rx="4" ry="4" width="60" height="50" />
    <rect x="90" y="50" rx="4" ry="4" width="150" height="16" />
    <rect x="260" y="50" rx="4" ry="4" width="80" height="16" />
    <rect x="360" y="50" rx="4" ry="4" width="80" height="16" />
    <rect x="460" y="50" rx="4" ry="4" width="80" height="16" />
    <rect x="560" y="50" rx="4" ry="4" width="80" height="16" />

    {/* Cart Summary */}
    <rect x="10" y="120" rx="4" ry="4" width="200" height="20" />
    <rect x="10" y="150" rx="4" ry="4" width="100" height="16" />
    <rect x="250" y="150" rx="4" ry="4" width="80" height="16" />
    
    <rect x="10" y="180" rx="4" ry="4" width="100" height="16" />
    <rect x="250" y="180" rx="4" ry="4" width="80" height="16" />

    <rect x="10" y="210" rx="4" ry="4" width="100" height="20" />
    <rect x="250" y="210" rx="4" ry="4" width="80" height="20" />

    {/* Promo Code Input */}
    <rect x="450" y="150" rx="4" ry="4" width="200" height="35" />
    <rect x="660" y="150" rx="4" ry="4" width="80" height="35" />

    {/* Checkout Button */}
    <rect x="10" y="260" rx="4" ry="4" width="250" height="40" />
  </ContentLoader>
);
const ProductLoadersListFromCart = () => {
  return (
    <div  className="dress-loaders" style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}>
      <CartLoader />
    </div>
  );
};

export default ProductLoadersListFromCart;
