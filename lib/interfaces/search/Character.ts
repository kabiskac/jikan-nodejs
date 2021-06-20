import Anime from '../anime/SimpleInformation';
import Manga from '../manga/SimpleInformation';

interface Result {
  mal_id: string;
  url: string;
  image_url: string;
  name: string;
  alternative_names: string[];
  anime: Anime[];
  manga: Manga[];
  last_page: number;
}

interface Character {
  request_hash: string;
  request_cached: string;
  request_cache_expiry: string;
  results: Result[];
}