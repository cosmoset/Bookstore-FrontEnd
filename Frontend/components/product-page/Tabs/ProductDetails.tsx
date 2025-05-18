import React from "react";

export type SpecItem = {
  label: string;
  value: string;
};

const specsData: SpecItem[] = [
  {
    label: "Format",
    value: "Hardcover",
  },
  {
    label: "Pages",
    value: "320 pages",
  },
  {
    label: "Language",
    value: "English",
  },
  {
    label: "ISBN",
    value: "978-3-16-148410-0",
  },
  {
    label: "Publisher",
    value: "Penguin Random House",
  },
  {
    label: "Publication Date",
    value: "March 5, 2024",
  },
  {
    label: "Dimensions",
    value: "6.4 x 1.2 x 9.5 inches",
  },
  {
    label: "Weight",
    value: "1.2 pounds",
  },
];

const ProductDetails = () => {
  return (
    <>
      {specsData.map((item, i) => (
        <div className="grid grid-cols-3" key={i}>
          <div>
            <p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">
              {item.label}
            </p>
          </div>
          <div className="col-span-2 py-3 lg:py-4 border-b">
            <p className="text-sm w-full leading-7 text-neutral-800 font-medium">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
