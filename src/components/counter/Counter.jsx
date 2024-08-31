import { requests } from "@/utils/http";
import { useEffect, useState } from "react";

const Counter = () => {
  const [counts, setCounts] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);
        const response = await requests.get(`/analytics/count`);

        setCounts(response.data);

        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);
  const blockContent = [
    {
      id: 1,
      number: 2,
      // number: counts?.destinations_count,
      meta: "Countries",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: 4,
      meta: "Happy Tenants",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: 4,
      meta: "Happy Landlords",
      hasUnit: "",
      delayAnim: "300",
    },
    {
      id: 4,
      number: 98,
      meta: "Satisfaction",
      hasUnit: "%",
      delayAnim: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-xl-3 col-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="text-40 lg:text-30 lh-13 fw-600">
            {item.number}
            {item.hasUnit}
          </div>
          <div className="text-14 lh-14 text-light-1 mt-5">{item.meta}</div>
        </div>
      ))}
    </>
  );
};

export default Counter;
