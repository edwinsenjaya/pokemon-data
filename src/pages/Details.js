import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../store/action";

function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, []);

  if (!pokemonDetail) {
    return (
      <section className="page">
        <div className="container d-flex flex-column vw-100">
          <div className="row mb-5 mt-2">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                className="card-img-top mb-3"
                alt=""
                style={{ height: "150px" }}
              />
            </Link>
          </div>
          <div className="row d-flex ">
            <div className="col-6">
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-grow"
                  style={{ width: "4rem", height: "4rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="page">
        <div className="container d-flex flex-column">
          <div className="row mb-5 mt-2">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                className="card-img-top mb-3"
                alt=""
                style={{ height: "150px" }}
              />
            </Link>
          </div>
          <div className="row">
            <div className="col-6 ">
              <img
                src={pokemonDetail?.sprites}
                alt="pokemon"
                className="img-fluid mb-4 border border-dark border-1 rounded"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="col-6 d-flex flex-column">
              <div>
                <h3 className="mb-5 text-capitalize text-center">
                  {pokemonDetail?.name}
                </h3>
                <p className="mb-3 fs-4">Test</p>
                <p className="mb-3 fs-4">Test</p>
                <p className="mb-5 fs-4">Test</p>
              </div>
              <div>
                <div className="row justify-content-center">
                  <Link
                    to="/"
                    style={{ height: "50px" }}
                    className="btn btn-dark fs-4"
                  >
                    Back to home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
