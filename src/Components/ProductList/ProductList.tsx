import { Product as ProductType } from '../../utils/types'
import LoadingAnimation from '../LoadingAnimation';
import Product from '../Product';
import './style.css';

type Props = {
  products: ProductType[] | null;
}

const ProductList = (props: { products: { products: ProductType[]; } | null; }) => {
  if(props.products===null){
    return <>no</>
  }
  return (
    <div>
      <ul>
        {
          props.products.products.map(product=>(
            <li>
              <Product product={product} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default ProductList

