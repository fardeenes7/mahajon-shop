"use server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function getShopFromSlug(slug: string) {
    cookies().set("shopSlug", slug);
    return { slug };
}

export async function getShopFromDomain(domain: string) {
    cookies().set("shopSlug", domain);
    return { domain };
}
