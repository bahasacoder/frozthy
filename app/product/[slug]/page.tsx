
// import { fetchItems } from "@/actions/getDb"
import products from "@/db/products.json";

export async function generateStaticParams() {
  // Fetch your data to get the list of IDs
  //const posts = await fetch('https://.../items').then((res) => res.json());

  // Return an array of IDs to be pre-rendered
  return products.map((product) => ({
    slug: product.slug.toString(), // id must be a string
  }));
}

export default async function ProductSlugPage(
  { params }: { params: { slug: string } }
)  {
  const { slug } = await params
  const found = await products.find((product) => product.slug === slug );

  return (


    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
         <p>Product Page</p>
      </div>
      <div> 
         <h2>slug products : { slug }</h2>
      </div>
    </div>
  );

}
