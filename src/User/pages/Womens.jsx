import React, { useEffect } from 'react'
import "../css/Womens.css"
import API from '../../API/api.service';
import ProductCard from '../components/ProductCard';

const Womens = () => {

  const [womenProducts, setWomenProducts] = React.useState([]);
  const [sortOption, setSortOption] = React.useState("");

  useEffect(() => {
    API.get("products")
    .then((res) => {
      setWomenProducts(res.data.filter(e =>e.gender === 'feMale'));
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  }, [])

  useEffect(() => { 
    const sortedProducts = [...womenProducts].sort((a, b) => {
      if (sortOption === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setWomenProducts(sortedProducts);
  }, [womenProducts, sortOption]);

  const handleSortChange = (e) => { 
    setSortOption(e.target.value);
  };


  return (
    <div className='womens__container'>

        <div className='womens-sortby-div'>
         <p className='womens__heading'>Women's Collections</p>
            <select className='select-tag' name="" id="" onClick={handleSortChange}>
                <option value="" hidden>Sort By</option>
                <option value="lowToHigh">Price (Low to High)</option>
                <option value="highToLow">Price (High to Low)</option>
            </select>
        </div>

        <div className='womens__collection'>
          {womenProducts.map((e, i) => (
            <ProductCard datas={e} key={e._id} i={i}></ProductCard>
          ))}
        </div>
    </div>
  )
}

export default Womens