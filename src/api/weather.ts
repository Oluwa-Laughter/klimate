import { API_CONFIG } from "@/api/config";
import type {
  Coordinates,
  ForecastData,
  GeocodingResponse,
  WeatherData,
} from "@/api/types";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      ...API_CONFIG.DEFAULT_PARAMS,
      ...Object.fromEntries(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      ),
    });

    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    if (!API_CONFIG.API_KEY) {
      throw new Error(
        "Missing VITE_OPEN_WEATHER_API_KEY. Add it to .env and restart the dev server."
      );
    }

    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(
        `OpenWeather ${response.status} ${response.statusText}${
          body ? ` — ${body}` : ""
        }`
      );
    }

    return response.json();
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat,
      lon,
      units: "metric",
    });

    return this.fetchData<WeatherData>(url);
  }

  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat,
      lon,
      units: "metric",
    });

    return this.fetchData<ForecastData>(url);
  }

  async reverseGeocode({
    lat,
    lon,
  }: Coordinates): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
      lat,
      lon,
      limit: 1,
    });

    return this.fetchData<GeocodingResponse[]>(url);
  }

  async searchLocations(query: string): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO}/direct`, {
      q: query,
      limit: 5,
    });

    return this.fetchData<GeocodingResponse[]>(url);
  }
}

export const weatherAPI = new WeatherAPI();
