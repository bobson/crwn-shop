import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  if (isLoading) return <Spinner />;
  else
    return (
      <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </Fragment>
    );
};

export default Category;
