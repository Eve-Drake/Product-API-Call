import { useState } from 'react'
import Categories from './components/Features/Categories';
import AddProduct from './components/Features/AddProduct'
import GetProductData from './components/Fetching/GetProductData'
import SetCateogories from './components/Features/SetCateogories';
import GetCategories from './components/Fetching/GetCategories';
import ProductInterface from './components/ProductInterface';
import DisplayData from './components/UI/DisplayData';
import AllProductsDisplay from './components/UI/AllProductsDisplay';
import Nav from './components/UI/Nav';


function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [show, setShow]  =useState<boolean>(true);
  const [categoriesArray, setCategoriesArray] = useState<string[]>([])
  const [activeProductCategory, setActiveProductCatgory] = useState<string>('All')
  
  return (
    <>
    <Nav />
      <button onClick={()=>setShow(!show)}>{(show ? 'Show Form' : 'Hide Form')}</button>
      <div className={(show? 'hide' : '')}>
        <AddProduct />
        <GetCategories setCategoriesArray={setCategoriesArray}/>
        <Categories />
      </div>
      <GetProductData setProducts={setProducts} products={products}/>
      <AllProductsDisplay products={products} activeProductCategory={activeProductCategory}/>
    </>
  )
}

export default App
