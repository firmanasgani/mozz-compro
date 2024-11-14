"use client"
import { useState } from "react";

export default function ProductPage() {

  const [selectedProduct, setSelectedProduct] = useState<string>('Module');
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
    {
      name: "Product 6",
      description: "This is product 6",
    },
  ];

  return (
    <div>
      <div className="flex flex-col item-center justify-center mt-10 mb-20">
        <h1 className="text-4xl font-bold text-center">Our Products</h1>
        <div className="flex flex-col gap-2  items-center justify-center mt-10 mb-10">
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mb-10">
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=1)`,
              }}
              onClick={() => setSelectedProduct('Module')}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Module</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=2)`,
              }}
              onClick={() => setSelectedProduct('Cabinet')}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Cabinet</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=3)`,
              }}
              onClick={() => setSelectedProduct('Rental')}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Rental</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=4)`,
              }}
              onClick={() => setSelectedProduct('Creative')}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Creative</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center align-center">
      <h1 className="text-4xl font-bold text-center">{selectedProduct}</h1>
      </div>
      <div className="flex flex-row justify-center align-center">
        <table className="table-auto w-[80%]">
          <thead className="bg-black text-white">
            <tr>
              <th className="w-[100px]">Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
