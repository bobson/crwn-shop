import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.componet";
import Category from "../category/category.component";

import "./shop.styles.scss";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
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
