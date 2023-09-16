import { Params } from 'react-router-dom';

export const CAPSULES_URL = 'https://api.spacexdata.com/v4/capsules';
export const LAUNCHES_URL = 'https://api.spacexdata.com/v4/launches/past';
export const LAUNCH = (params: Params<string>) => `https://api.spacexdata.com/v4/launches/${params.launchId}`;

export type Capsule = {
  reuse_count: number;
  water_landings: number;
  land_landings: number;
  last_update: string;
  launches: [string];
  serial: string;
  status: string;
  type: string;
  id: string;
};

export interface Launch {
  fairings?: unknown;
  links: Links;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: string[];
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  id: string;
}

interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface Flickr {
  small: string[];
  original: string[];
}

interface Reddit {
  campaign: string;
  launch: string;
  media: string;
  recovery?: string;
}

interface Patch {
  small: string;
  large: string;
}
