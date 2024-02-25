import React, { useEffect } from 'react'
import "../css/Mens.css"
import ProductCard from '../components/ProductCard';
import API from '../../API/api.service';

const Mens = () => {
  const [menProducts, setMenProducts] = React.useState([]);
  const [sortOption, setSortOption] = React.useState(""); 

  useEffect(() => {
    API.get("products")
    .then((res) => {
      setMenProducts(res.data.filter(e =>e.gender === 'Male'));
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  }, [])

  useEffect(() => { 
    const sortedProducts = [...menProducts].sort((a, b) => {
      if (sortOption === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setMenProducts(sortedProducts);
  }, [sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className='mens__container'>

        <div className='mens-sortby-div'>
         <p className='mens__heading'>Men's Collections</p>
            <select className='select-tag' name="" id="" onChange={handleSortChange}>
                <option value="" hidden>Sort By</option>
                <option value="lowToHigh">Price (Low to High)</option>
                <option value="highToLow">Price (High to Low)</option>
            </select>
        </div>

        <div className='mens__collection'>
  
          {menProducts.map((e, i) => (
            <ProductCard datas={e}></ProductCard>
          ))}
          
        </div>
    </div>
  )
}

export default Mens