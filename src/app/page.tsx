import { getShopInfo } from "@/actions/shop";
import { getProductList } from "@/actions/product";
import Image from "next/image";
import NotFound from "./not-found";
import Link from "next/link";
export default async function Home() {
    const shop = await getShopInfo();
    const products = await getProductList();
    if (shop) {
        return (
            <main>
                <section id="header" className="py-8">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-3"
                    >
                        <Image
                            alt="logo"
                            className="h-12 w-12"
                            height="48"
                            src={
                                shop.logo
                                    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/shops/${shop.logo}`
                                    : "/placeholder.svg"
                            }
                            width="48"
                        />
                        <h1 className="text-3xl font-bold">{shop.name}</h1>
                    </Link>
                </section>
                <section id="products">
                    <div className="w-full max-w-7xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {products.map((product: any) => (
                            <Link
                                href={`/products/${product.slug}`}
                                key={product.id}
                            >
                                <div className="bg-white rounded-lg shadow ">
                                    <div className="aspect-square">
                                        <Image
                                            alt="Product image"
                                            className="w-full h-full rounded-md object-cover object-center"
                                            height="512"
                                            src={
                                                product.image
                                                    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/products/${product.image}`
                                                    : "/placeholder.svg"
                                            }
                                            width="512"
                                        />
                                    </div>
                                    <div className="p-4 text-lg font-bold">
                                        <h2>{product.name}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        );
    }
}
