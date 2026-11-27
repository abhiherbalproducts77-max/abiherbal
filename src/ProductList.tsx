import { products } from "./products";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <section className="product-section py-5" aria-labelledby="products-heading">
      <div className="container">
        <div className="mb-4">
          <p className="product-eyebrow mb-2">Abi Herbals collection</p>
          <h2 className="h1 fw-semibold mb-2" id="products-heading">
            Everyday care, made herbal
          </h2>
          <p className="text-secondary mb-0">
            Explore face packs, hair care and bathing essentials from our
            collection.
          </p>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.name}>
              <Link
                className="product-card-link"
                to={`/products/${product.slug}`}
              >
                <article className="card product-card h-100">
                  <img
                    className="card-img-top product-card-image"
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="product-category mb-2">
                      {product.category}
                    </p>
                    <h3 className="h5 card-title">{product.name}</h3>
                    <p className="card-text text-secondary mb-0">
                      {product.description}
                    </p>
                    {product.code && (
                      <p className="product-code mt-3 mb-0">
                        Product code: <span>{product.code}</span>
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
