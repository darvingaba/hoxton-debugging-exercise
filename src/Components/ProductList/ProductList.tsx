import { Product as ProductType } from '../../utils/types'
import LoadingAnimation from '../LoadingAnimation';
import Product from '../Product';
import './style.css';

type Props = {
  products: ProductType[] | null;
}

const ProductList = ({products}:Props) => {
  if(products===null){
    return (<LoadingAnimation/>)
  }
  return (
    <div>
      {products.map(product =>
        <Product product={product} />
      )}
    </div>
  )
}

export default ProductList