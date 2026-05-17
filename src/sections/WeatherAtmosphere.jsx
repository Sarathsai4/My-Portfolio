import { useEffect, useMemo, useState } from "react";

const CINCINNATI = {
  latitude: 39.1031,
  longitude: -84.512,
  label: "Cincinnati, OH",
  source: "fallback",
};

const weatherCopy = {
  sunny: {
    label: "Sunny",
    note: "Clean visibility for clear decisions and bright dashboards.",
  },
  cloudy: {
    label: "Cloudy",
    note: "Layered signals, blended context, and patient analysis.",
  },
  rain: {
    label: "Rainfall",
    note: "Fresh data streams moving through the pipeline.",
  },
  storm: {
    label: "Storm",
    note: "Volatile inputs need monitoring, alerts, and fast triage.",
  },
  mist: {
    label: "Mist",
    note: "Low-visibility data still becomes useful with good modeling.",
  },
  cold: {
    label: "Cold",
    note: "Crisp conditions, careful checks, and reliable controls.",
  },
  frost: {
    label: "Frost",
    note: "Frozen edges call for quality gates and resilient pipelines.",
  },
  snow: {
    label: "Snow",
    note: "Quiet signals accumulating into a clearer pattern.",
  },
};

const getCondition = (code, temperature) => {
  if ([48, 56, 57, 66, 67].includes(code) || temperature <= 28) return "frost";
  if (temperature <= 34 && [0, 1, 2, 3, 45].includes(code)) return "cold";
  if ([45].includes(code)) return "mist";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "storm";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "rain";
  if ([2, 3].includes(code)) return "cloudy";
  return "sunny";
};

const getWeatherUrl = ({ latitude, longitude }) => {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current:
      "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day",
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
    precipitation_unit: "inch",
    timezone: "auto",
  });

  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
};

const WeatherAtmosphere = () => {
  const [location, setLocation] = useState(CINCINNATI);
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("loading");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadWeather = async (coords) => {
      try {
        setStatus("loading");
        const response = await fetch(getWeatherUrl(coords), {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);

        const data = await response.json();
        if (!isMounted) return;

        setWeather(data.current);
        setLocation(coords);
        setStatus("ready");
      } catch (error) {
        if (error.name === "AbortError" || !isMounted) return;
        setStatus("error");
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          loadWeather({
            latitude: Number(coords.latitude.toFixed(4)),
            longitude: Number(coords.longitude.toFixed(4)),
            label: "Your area",
            source: "detected",
          });
        },
        () => loadWeather(CINCINNATI),
        { timeout: 4000, maximumAge: 1000 * 60 * 20 }
      );
    } else {
      loadWeather(CINCINNATI);
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const condition = useMemo(() => {
    if (!weather) return "cloudy";
    return getCondition(weather.weather_code, weather.temperature_2m);
  }, [weather]);

  const copy = weatherCopy[condition];
  const temperature = weather ? Math.round(weather.temperature_2m) : "--";
  const feelsLike = weather ? Math.round(weather.apparent_temperature) : "--";
  const humidity = weather ? Math.round(weather.relative_humidity_2m) : "--";
  const wind = weather ? Math.round(weather.wind_speed_10m) : "--";
  const precipitation = weather ? Number(weather.precipitation).toFixed(2) : "--";

  return (
    <aside
      className={`weather-float weather-${condition} ${expanded ? "weather-open" : ""}`}
      aria-label="Live weather"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setExpanded(false);
        }
      }}
    >
      <button
        type="button"
        className="weather-logo"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="weather-logo-ring" />
        <span className="weather-visual weather-logo-visual" aria-hidden="true">
          <div className="weather-sky-glow" />
          <div className="weather-sun" />
          <div className="weather-cloud weather-cloud-one" />
          <div className="weather-cloud weather-cloud-two" />
          <div className="weather-rain">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="weather-snow">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="weather-mist">
            <span />
            <span />
            <span />
          </div>
          <div className="weather-lightning" />
        </span>
        <span className="sr-only">Toggle live weather</span>
      </button>

      <div
        className="weather-popover"
        style={{
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? "auto" : "none",
          transform: expanded
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(0.8rem, 0.8rem, 0) scale(0.94)",
        }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-aqua">
            Live Weather
          </p>
          <h2 className="mt-2 text-xl font-semibold">
            Portfolio atmosphere
          </h2>
          <p className="mt-2 text-xs leading-5 text-white/62">
            Current climate drives this floating visual: sunny, rainfall,
            cloudy, mist, cold, frost, snow, and storm states.
          </p>
        </div>

        <div className="weather-readout">
          <div>
            <p className="text-sm text-white/60">
              {location.label}
              {location.source === "detected" ? " detected" : " fallback"}
            </p>
            <p className="mt-1 text-6xl font-semibold leading-none">
              {temperature}°F
            </p>
            <p className="mt-3 text-lg font-medium text-white">{copy.label}</p>
            <p className="mt-2 text-sm leading-6 text-white/68">{copy.note}</p>
          </div>

          <div className="weather-metrics">
            <span>
              <strong>{feelsLike}°F</strong>
              Feels like
            </span>
            <span>
              <strong>{humidity}%</strong>
              Humidity
            </span>
            <span>
              <strong>{wind} mph</strong>
              Wind
            </span>
            <span>
              <strong>{precipitation} in</strong>
              Precipitation
            </span>
          </div>

          {status === "error" && (
            <p className="mt-4 text-xs text-coral">
              Weather service is temporarily unavailable.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default WeatherAtmosphere;
