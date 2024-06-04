"use server";

import { cookies, headers } from "next/headers";

export async function getShopInfo() {
    const siteHost = headers().get("host");
    try {
        const res = await fetch(
            `${process.env.API_BASE_URL}/shop/${siteHost}/`
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
