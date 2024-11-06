export default function ProductPage() {
  const productList = [
    {
      name: "Product 1",
      description: "This is product 1",
    },
    {
      name: "Product 2",
      description: "This is product 2",
    },
    {
      name: "Product 3",
      description: "This is product 3",
    },
    {
      name: "Product 4",
      description: "This is product 4",
    },
    {
      name: "Product 5",
      description: "This is product 5",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product.name} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
