import Character from '../character/SimpleInformation';
import Manga from '../manga/SimpleInformation';

interface VoiceActingRole {
  role: string;
  anime: Anime;
  character: Character;
}

interface AnimeStaffPosition {
  position: string;
  url: string;
  image_url: string;
  name: string;
}

interface PublishedManga {
  position: string;
  manga: Manga
}

export default interface MainInformation {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  url: string;
  image_url: string;
  website_url: string;
  name: string;
  given_name: string;
  family_name: string;
  alternate_names: string[];
  birthday: Date;
  member_favorites: number;
  about: string;
  voice_acting_roles: VoiceActingRole[];
  anime_staff_positions: AnimeStaffPosition[];
  published_manga: PublishedManga[];
}
