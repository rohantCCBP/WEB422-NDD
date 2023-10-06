//Rohan Tankala, rtankala1, rtankala1@myseneca.ca, 122836166, Professor Blessing Ajiboye, WEB422-NDD

export default function Hello() {
  const productList = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelry",
    "Belts",
    "Electronics",
    "Bags",
    "Shoes",
  ];

  return (
    <>
      <h2>Product List</h2>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </>
  );
}