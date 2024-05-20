import sprite from "../../../assets/svg/sprite.svg";
import capitalizeFirstLetter from "../../../utils/capitalize";
import {
  DetailsList,
  HorizontalLine,
  MoreDetailsContainer,
  VehicleDetailsHeader,
  VehicleDetailsList,
} from "./Features.styled";
import Booking from "../Booking";

const Features = ({ camperInfo }) => {
  const {
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details: { beds, airConditioner, hob },
  } = camperInfo ?? {};

  return (
    <MoreDetailsContainer>
      <div>
        <DetailsList>
          <li>
            <svg width="20px" height="20px" fill="none" className="icon-fill">
              <use href={`${sprite}#icon-users`} />
            </svg>
            <span>{adults} adults</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-transmission`} />
            </svg>
            <span>{capitalizeFirstLetter(transmission)}</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none" className="icon-fill">
              <use href={`${sprite}#icon-ac`} />
            </svg>
            <span>AC</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none" className="icon-fill">
              <use href={`${sprite}#icon-petrol`} />
            </svg>
            <span>{capitalizeFirstLetter(engine)}</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            <span>Kitchen</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-bed`} />
            </svg>
            <span>{beds} beds</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-conditioner`} />
            </svg>
            <span>{airConditioner} air conditioner</span>
          </li>

          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-cd`} />
            </svg>
            <span>CD</span>
          </li>
          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-radio`} />
            </svg>
            <span>Radio</span>
          </li>
          <li>
            <svg width="20px" height="20px" fill="none">
              <use href={`${sprite}#icon-hob`} />
            </svg>
            <span>{hob} hob</span>
          </li>
        </DetailsList>

        <VehicleDetailsHeader>Vehicle Details</VehicleDetailsHeader>

        <HorizontalLine />

        <VehicleDetailsList>
          <li>
            <span>Form</span> <span>{capitalizeFirstLetter(form)}</span>
          </li>
          <li>
            <span>Length</span> <span>{length}</span>
          </li>
          <li>
            <span>Width</span> <span>{width}</span>
          </li>
          <li>
            <span>Height</span> <span>{height}</span>
          </li>
          <li>
            <span>Tank</span> <span>{tank}</span>
          </li>
          <li>
            <span>Consumption</span> <span>{consumption}</span>
          </li>
        </VehicleDetailsList>
      </div>

      <Booking />
    </MoreDetailsContainer>
  );
};

export default Features;
