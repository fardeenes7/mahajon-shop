"use server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function getProductList() {
    const host = headers().get("host");
    try {
        const res = await fetch(
            `${process.env.API_BASE_URL}/shop/${host}/products/`
        );
        const data = await res.json();
        if (res.ok && data) {
            return data;
        }
        return null;
    } catch (error) {
        return null;
    }
}

export async function getProductDetails(slug: string) {
    return { slug };
}
