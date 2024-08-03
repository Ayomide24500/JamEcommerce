import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state: any) => state.history);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        Checkout History
      </h1>
      {history?.length === 0 ? (
        <p className="text-gray-600">No checkout history available.</p>
      ) : (
        history?.map((entry: any, index: any) => (
          <div
            key={index}
            className="mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="mb-4">
              <h2 className="text-[15px] font-bold text-gray-600">
                User: {entry.user?.data.name}
              </h2>
              <p className="text-gray-700 text-[13px]">
                Address: {entry.user?.data.address}
              </p>
              <p className="text-gray-700 text-[13px]">
                Phone: {entry.user?.data.phone}
              </p>
            </div>
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
              Products:
            </h3>
            <ul className="space-y-2 text-[14px]">
              {entry.product.map((product: any, idx: any) => (
                <li key={product.id} className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium text-gray-700">
                    Name: {product.productName}
                  </p>
                  <p className="text-gray-600">Category: {product.category}</p>
                  <p className="text-gray-600">Price: ₦{product.price}</p>
                  <p className="text-gray-600">Quantity: {product.QTY}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
