export default function ProductDetails({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div>
            Product Details
            <h1>{params.slug}</h1>
        </div>
    );
}
