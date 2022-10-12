import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.componet";
import Category from "../category/category.component";

import "./shop.styles.scss";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
