import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./products";

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = product
      ? `${product.name} | ABI Herbals`
      : "Product not found | ABI Herbals";

    return () => {
      document.title = "ABI Herbals";
    };
  }, [product]);

  if (!product) {
    return (
      <section className="container product-detail py-5">
        <p className="product-eyebrow mb-2">Product not found</p>
        <h1 className="h2 mb-3">We couldn’t find that product.</h1>
        <Link to="/">Back to all products</Link>
      </section>
    );
  }

  return (
    <section className="container product-detail py-5">
      <Link className="product-back-link" to="/">
        &larr; Back to all products
      </Link>

      <div className="row g-4 g-lg-5 align-items-start mt-2">
        <div className="col-12 col-lg-6">
          <img
            className="product-detail-image"
            src={product.image}
            alt={product.imageAlt}
          />
        </div>
        <div className="col-12 col-lg-6">
          <p className="product-category mb-2">{product.category}</p>
          <h1 className="display-6 fw-semibold mb-3">{product.name}</h1>
          <p className="lead text-secondary">{product.description}</p>

          {product.code && (
            <p className="product-detail-code mb-4">
              Product code: <span>{product.code}</span>
            </p>
          )}

          <div className="product-usage">
            <h2 className="h4 mb-3">How to use</h2>
            {product.usage ? (
              product.usage.map((method) => (
                <section className="usage-method" key={method.title}>
                  <h3 className="h6">{method.title}</h3>
                  <ol>
                    {method.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
              ))
            ) : (
              <p className="text-secondary mb-0">
                Follow the directions on the product packaging.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
