import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";

import "./mapComponent.css";

const MapComponent = ({ data }) => {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAP_KEY;

  return (
    <APIProvider apiKey={API_KEY} className="googlemap-api">
      <Map
        // style={{ width: "80vw", height: "50vh" }}
        defaultZoom={2}
        defaultCenter={{ lat: 44.242365, lng: -119.809302 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="DEMO_MP_ID"
        className="googlemap"
      >
        <PoiMarkers pinInfo={data} />
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
