import { Link } from "react-router-dom";
import Slider from "react-slick";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";
import { requests } from "@/utils/http";
import PropertyItem from "../cards/PropertyItem";

const FilterHouses2 = ({ filterOption }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const data = await requests.get(`/spaces?country=${filterOption}&page`);

        setFilteredItems(data.data.data);

        console.log(data.data.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, [filterOption]);

  return (
    <>
      {filteredItems.slice(0, 8).map((item) => (
        <PropertyItem item={item} />
      ))}
    </>
  );
};

export default FilterHouses2;
