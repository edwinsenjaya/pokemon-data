import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "../store/action";
import Swal from "sweetalert2";

function PokemonCard(props) {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state);
  const { pokemonList } = props;
  const colorArray = [];

  pokemonList?.forEach((el) => {
    switch (el.types[0]) {
      case "fire":
        colorArray.push("red");
        break;
      case "grass":
        colorArray.push("green");
        break;
      case "water":
        colorArray.push("blue");
        break;
      case "bug":
        colorArray.push("#6EE7B7");
        break;
      case "normal":
        colorArray.push("#A3A3A3");
        break;
      case "poison":
        colorArray.push("#7E22CE");
        break;
      case "electric":
        colorArray.push("#FACC15");
        break;
      case "fairy":
        colorArray.push("#DB2777");
        break;
      case "ground":
        colorArray.push("#78350F");
        break;
      case "psychic":
        colorArray.push("#F87171");
        break;
      case "fighting":
        colorArray.push("#C2410C");
        break;
      case "rock":
        colorArray.push("#CA8A04");
        break;
      case "ghost":
        colorArray.push("#312E81");
        break;
      case "ice":
        colorArray.push("#7DD3FC");
        break;
      case "dragon":
        colorArray.push("#A78BFA");
        break;
      default:
        colorArray.push("#A3A3A3");
    }
  });

  function formatNumber(number) {
    let str = String(number);
    while (str.length < 3) {
      str = "0" + str;
    }
    return "#" + str;
  }

  if (errorMessage) {
    Swal.fire("", errorMessage, "error");
    dispatch(errorHandler(""));
  }

  if (pokemonList.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-grow"
          style={{ width: "8rem", height: "8rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {pokemonList?.map((el, index) => {
          return (
            <div key={el.index} className="col">
              <div className="card h-100 border border-dark border-2">
                <div className="row">
                  <Link to={`/pokemon/${el.index}`}>
                    <img src={el.sprites} className="card-img-top" alt="" />
                  </Link>
                </div>
                <div className="row card-body d-flex flex-column justify-content-end mx-auto">
                  <h2 className="card-title text-center fw-bold text-capitalize">
                    {el.name}
                  </h2>
                  <h6 className="card-title text-center fw-bold">
                    {formatNumber(el.index)}
                  </h6>
                  <div className="d-flex flex-row justify-content-center">
                    {el.types.map((el, i) => {
                      return (
                        <span
                          style={{
                            backgroundColor: colorArray[index],
                          }}
                          key={i}
                          className="rounded text-center fw-normal fst-italic text-white flex-inline mx-2 mb-2 p-1 fs-6"
                        >
                          {el}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default PokemonCard;
