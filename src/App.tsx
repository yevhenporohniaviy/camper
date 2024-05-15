import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCars } from "./redux/cars/carsSelectors";
import { getAllCars } from "./redux/cars/carsThunk";

const App = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <>
      <div>
        {cars.map((item) => (
          <div key={item._id}>
            {item.name}
            <button onClick={() => dispatch(getAllCars())}>
              {" "}
              Add favorite
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
