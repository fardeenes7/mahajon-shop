"use server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function getProductList() {
    const shopSlug = cookies().get("shopSlug");
    return { products: [] };
}

export async function getProductDetails(slug: string) {
    return { slug };
}
