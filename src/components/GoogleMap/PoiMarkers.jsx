import { AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { useState } from "react";

const PoiMarkers = ({ pinInfo }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  function handleMarkerClick(pinInfo) {
    setSelectedLocation(pinInfo.key);
  }

  // check whether it fits the condition
  const filteredPins = pinInfo.filter(
    (pin) => pin.location.lat && pin.location.lng
  );

  // return null when it doesn't match the rules
  if (filteredPins.length === 0) {
    return null;
  }

  return (
    <>
      {filteredPins.map((pinInfo) => (
        <div key={pinInfo.key}>
          <AdvancedMarker
            position={pinInfo.location}
            onClick={() => handleMarkerClick(pinInfo)}
          >
            <Pin
              background={"#cf1500"}
              glyphColor={"#ffffff"}
              borderColor={"#000000"}
            />
          </AdvancedMarker>

          {selectedLocation === pinInfo.key && (
            <InfoWindow
              position={pinInfo.location}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <h4>{pinInfo.title}</h4>
                <ul>
                  <li>City: {pinInfo.city}</li>
                  <li>Employer: {pinInfo.employer}</li>
                  <li>Degree: {pinInfo.degree}</li>
                  {pinInfo.startDate && (
                    <li>Start Date: {pinInfo.startDate}</li>
                  )}
                  {pinInfo.term && <li>Term: {pinInfo.term}</li>}
                </ul>
              </div>
            </InfoWindow>
          )}
        </div>
      ))}
    </>
  );
};

export default PoiMarkers;
