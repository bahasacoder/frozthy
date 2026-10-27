import Link from 'next/link';
import Image from 'next/image';
import products from "@/db/products.json";
import ProductListDelapan from "@/components/blocks/product-list-delapan";
//
function getUniqueCategories(categs:any) {
  if (!Array.isArray(categs)) {
    throw new Error("Input must be an array");
  }

  return [...new Set(
    categs
      .filter(item => item && typeof item.category === "string") // validate
      .map(item => item.category.trim()) // normalize
  )];
}

try {
  const categories = getUniqueCategories(products);
  console.log("try",categories); // ["Electronics", "Clothing", "Books"];
} catch (error) {
  console.error("Error:", (error as Error).message);
}
export async function generateStaticParams() {
  return [{ "category" : "meats" }, { "category" : "fruits"}, { "category" : "drinks"}];
}

export default async function CategoryPage(
  { params }: { params: Promise<{ category: string }> }
) {
   const categories = getUniqueCategories(products);
   console.log("categ",categories);
  const { category } = await params;
  return (
    <>
     
    
      <ProductListDelapan />
    </>
  );
}
