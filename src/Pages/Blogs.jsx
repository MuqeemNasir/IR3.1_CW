import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Blogs() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blogs</h1>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae veniam temporibus cumque sunt porro odio.
                  </p>
                  <Link to="/blogs/1" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae veniam temporibus cumque sunt porro odio.
                  </p>
                  <Link to="/blogs/2" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mt-3">
                  <div className="card-body">
                    <h5>Blog 3</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae veniam temporibus cumque sunt porro odio.
                    </p>
                    <Link to="/blogs/3" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
