import { getShopInfo } from "@/actions/shop";
import Image from "next/image";
import NotFound from "./not-found";

export default async function Home() {
    const shop = await getShopInfo();
    console.log("home page");
    console.log(shop);
    if (shop) {
        return (
            <main>
                <h1>Name: {shop.name}</h1>
                <h2>SLug:{shop.slug}</h2>
            </main>
        );
    }
}
