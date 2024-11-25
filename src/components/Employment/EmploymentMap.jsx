import MapComponent from "../GoogleMap/MapComponent";

import { useState, useEffect } from "react";
import getData from "../../utils/getData";
import Loading from "../../components/Loading/Loading";

const EmploymentMap = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getData("location/").then((json) => {
      setLocation(json);
      setLoaded(true);
    });
  }, []);

  function getLocation(type, data) {
    const city = data.split(" ")[0].toUpperCase();
    const state = data.split(" ")[1].toUpperCase();

    for (const item of location) {
      if (
        item.city.trim().toUpperCase() === city &&
        item.state.trim().toUpperCase() === state
      ) {
        if (type === "lat") {
          return item.latitude ? item.latitude : 0;
        } else if (type === "lng") {
          return item.longitude ? item.longitude : 0;
        }
      }
    }
  }

  const mapInfo = data.map((data, index) => ({
    key: index,
    title: data.title,
    location: {
      lat: Number(getLocation("lat", data.city)),
      lng: Number(getLocation("lng", data.city)),
    },
    degree: data.degree,
    city: data.city,
    employer: data.employer,
    startDate: data.startDate,
  }));

  if (!loaded) {
    return (
      <div>
        <Loading type="Map" />
      </div>
    );
  }

  return (
    <div>
      <MapComponent data={mapInfo} />
    </div>
  );
};

export default EmploymentMap;
