import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT_LIST = [
  {
    id: "p1",
    title: "Test 1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test 2",
    price: 10,
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    title: "Test 3",
    price: 16,
    description: "This is a third product - amazing!",
  },
  {
    id: "p4",
    title: "Test 4",
    price: 11,
    description: "This is a fourth product - amazing!",
  },
];

const Products = (props) => {
  const productList = DUMMY_PRODUCT_LIST.map((item) => {
    return <ProductItem key={item.id} {...item} />;
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
