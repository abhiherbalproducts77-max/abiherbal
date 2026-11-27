import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      <header className="site-header py-4">
        <div className="container">
          <Link className="brand-name text-decoration-none" to="/">
            ABI Herbals
          </Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route
            path="*"
            element={
              <section className="container product-detail py-5">
                <h1 className="h2 mb-3">Page not found.</h1>
                <Link to="/">Back to all products</Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer py-4">
        <div className="container text-secondary small">
          © {new Date().getFullYear()} ABI Herbals
        </div>
      </footer>
    </>
  );
}

export default App;
