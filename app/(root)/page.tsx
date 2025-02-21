import { getLatestProducts } from '@/lib/actions/product.actions';
import ProductList from '@/components/shared/product/product-list';

const Homepage = async() => {
 const latestProducts = await getLatestProducts();
//  console.log(latestProducts);

  return  <>
  <ProductList
    data={latestProducts}
    title="Newest Arrivals"
    limit={4} />
  </> ;
}
 
export default Homepage;