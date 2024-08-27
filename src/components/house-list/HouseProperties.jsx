import { Link } from "react-router-dom";
import Slider from "react-slick";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import PropertyItem from "../cards/PropertyItem";

const HouseProperties = ({ properties }) => {
  return (
    <>
      {properties.map((item) => (
        <PropertyItem item={item} />
      ))}
    </>
  );
};

export default HouseProperties;
