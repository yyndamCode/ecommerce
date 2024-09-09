"use client"
import React, { useEffect, useState } from 'react'
import CustomButton from '../_components/ui/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import FastProduct from '../_lib/data'
import ProductCard from '../_components/ProductCard'
import { setLikes } from '@/redux/likeSlice'

function Wishlist() {
 const likesData = useSelector((state) => state.like.likes);
  const [likedProducts, setLikedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    let likes = localStorage.getItem("likes");
    dispatch(setLikes(JSON.parse(likes)));
  },[])

  useEffect(() => {
    setLikedProducts(FastProduct.filter(product => likesData.includes(product.id)));
  }, [likesData]);
     const [visibleProductCount, setVisibleProductCount] = useState(4); // Başlangıçta 4 ürünü göster

  const handleLoadMore = () => {
    // Daha fazla ürün yükleme işlevi
    setVisibleProductCount(visibleProductCount + 4); // Her tıklamada 4 ürün daha yükle
  };
 
  return (
    <main className='my-20'>
      <div className="flex justify-between items-center">
        <h3 className='text-xl font-normal'>Wishlist ({likedProducts.length})</h3>
        <CustomButton className="border rounded-md" onClick={handleLoadMore}>Move All To Bag</CustomButton>
      </div>
      <div className='my-16'>
         <ul className="grid grid-cols-2 md:grid-cols-3 laptop:grid-cols-4 gap-8 ">
        {likedProducts.slice(0, visibleProductCount).map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      </div>
        <div className="flex justify-between items-center">
        <h3 className='text-xl font-normal'>Just for you</h3>
        <CustomButton className="border rounded-md" onClick={()=>{}}>See All </CustomButton>
      </div>
    </main>
  )
}

export default Wishlist