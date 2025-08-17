import { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import SunCalc from "suncalc";

const ResponsiveGlobe = () => {
  const [isDaytime, setIsDaytime] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());


  // console.log("Current Dublin Time:", getDublinTime());
  // console.log("Current UTC Time:", new Date().toUTCString());
  // console.log("Is Daytime:", isDaytime ? "Yes" : "No");
  
  const DublinCoords = { lat: 53.3498, lng: -6.2603 };

  useEffect(() => {
    const updateDayNight = () => {
      // Get current time in Dublin's timezone properly
      const now = new Date();
      const times = SunCalc.getTimes(now, DublinCoords.lat, DublinCoords.lng);

      // Convert to UTC timestamps for accurate comparison
      const nowUTC = now.getTime();
      const sunriseUTC = times.sunrise.getTime();
      const sunsetUTC = times.sunset.getTime();

      setIsDaytime(nowUTC > sunriseUTC && nowUTC < sunsetUTC);
      setCurrentTime(now);
    };

    // Immediate update on mount
    updateDayNight();

    // Update every minute
    const interval = setInterval(updateDayNight, 60000);
    return () => clearInterval(interval);
  }, [DublinCoords.lat, DublinCoords.lng]);

  return (
    <div className="rounded-3xl w-full sm:h-[326] min-h-[400px] flex justify-center items-center">
      <Globe
        animateIn={true}
        height={350}
        width={350}
        globeImageUrl={
          isDaytime
            ? "//unpkg.com/three-globe/example/img/earth-day.jpg"
            : "//unpkg.com/three-globe/example/img/earth-night.jpg"
        }
        backgroundColor="rgba(0,0,0,0)"
        pointsData={[
          {
            lat: 53.362,
            lng: -6.2603,
          },
        ]}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={() => "red"}
        pointRadius={0.2}
        pointResolution={16}
        pointAltitude={0.5}
        pointLabel={() => {
          const dublinDate = currentTime.toLocaleDateString("en-GB", {
            timeZone: "Europe/Dublin",
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
          });

          const dublinTime = currentTime.toLocaleTimeString("en-GB", {
            timeZone: "Europe/Dublin",
            hour: "2-digit",
            minute: "2-digit",
          });

          return `
            <div class="tooltip-content">
              <div class="tooltip-header">📍 I Am Here</div>
              <div class="tooltip-date">${dublinDate}</div>
              <div class="tooltip-time">${dublinTime}</div>
            </div>
          `;
        }}
      />
    </div>
  );
};

export default ResponsiveGlobe;