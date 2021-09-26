import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../store/action";

function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector((state) => state);
  let typeColor = "";

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, []);
  console.log(pokemonDetail, "DATA");

  switch (pokemonDetail?.types[0]) {
    case "fire":
      typeColor = "red";
      break;
    case "grass":
      typeColor = "green";
      break;
    case "water":
      typeColor = "blue";
      break;
    case "bug":
      typeColor = "#6EE7B7";
      break;
    case "normal":
      typeColor = "#A3A3A3";
      break;
    case "poison":
      typeColor = "#7E22CE";
      break;
    case "electric":
      typeColor = "#FACC15";
      break;
    case "fairy":
      typeColor = "#DB2777";
      break;
    case "ground":
      typeColor = "#78350F";
      break;
    case "psychic":
      typeColor = "#F87171";
      break;
    case "fighting":
      typeColor = "#C2410C";
      break;
    case "rock":
      typeColor = "#CA8A04";
      break;
    case "ghost":
      typeColor = "#312E81";
      break;
    case "ice":
      typeColor = "#7DD3FC";
      break;
    case "dragon":
      typeColor = "#A78BFA";
      break;
    default:
      typeColor = "#A3A3A3";
  }

  function formatNumber(number) {
    let str = String(number);
    while (str.length < 3) {
      str = "0" + str;
    }
    return "#" + str;
  }

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
              <div className="row mb-4">
                <h1 className="mb-2 text-capitalize text-center">
                  {pokemonDetail?.name}
                </h1>
                <div className="d-flex flex-row justify-content-center mb-3">
                  {pokemonDetail?.types?.map((el, i) => {
                    return (
                      <span
                        style={{
                          backgroundColor: typeColor,
                        }}
                        key={i}
                        className="rounded text-center fw-normal fst-italic text-white flex-inline mx-2 mb-2 p-1 fs-6"
                      >
                        {el}
                      </span>
                    );
                  })}
                </div>
                <div className="col-6">
                  <p className="mb-4 fs-4">
                    Index : {formatNumber(pokemonDetail?.index)}
                  </p>
                  <p className="mb-4 fs-4">HP: {pokemonDetail?.stats.hp}</p>
                  <p className="mb-4 fs-4">Height: {pokemonDetail?.height}</p>
                  <p className="mb-4 fs-4">Weight: {pokemonDetail?.weight}</p>
                  <p className="mb-4 fs-4 text-capitalize">
                    Abilities: {pokemonDetail.abilities?.join(", ")}
                  </p>
                </div>
                <div className="col-6">
                  <p className="mb-4 fs-4">
                    Attack: {pokemonDetail?.stats.attack}
                  </p>
                  <p className="mb-4 fs-4">
                    Defense: {pokemonDetail?.stats.defense}
                  </p>
                  <p className="mb-4 fs-4">
                    Speed: {pokemonDetail?.stats.speed}
                  </p>
                  <p className="mb-4 fs-4">
                    Special Attack: {pokemonDetail?.stats["special-attack"]}
                  </p>
                  <p className="mb-4 fs-4">
                    Special Defense: {pokemonDetail?.stats["special-defense"]}
                  </p>
                </div>
              </div>
              <div className="row justify-content-center mb-4">
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
      </section>
    );
  }
}

export default Details;
