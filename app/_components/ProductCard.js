// components/ProductCard.js
"use client";
import { MdStarRate } from "react-icons/md";
import ProductCardContent from "./ProductCardContent";

const ProductCard = ({ product }) => {
  const rating = Number.isFinite(product.rating)
    ? Math.floor(product.rating)
    : 0;
  const hasHalfStar =
    Number.isFinite(product.rating) && product.rating % 1 !== 0;
  return (
    <div  className="w-full cursor-pointer relative">
      <ProductCardContent product={product} />
      <div className="text-start">
        <h2 className="text-base font-medium">{product.name}</h2>
        <p className="text-[#DB4444] text-base my-1">
          ${product.price}{" "}
          <span className="text-gray-400 ml-2 line-through">
            ${product.oldPrice}
          </span>
        </p>
        <div className="flex items-center">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <span key={i} className="text-primary-8 text-xl">
              <MdStarRate />
            </span>
          ))}
          {hasHalfStar && (
            <span className="text-gray-400 text-xl opacity-[25px]">
              <MdStarRate />
            </span>
          )}
          <p className="text-gray-400 ml-3 text-sm">({product.reviews})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
