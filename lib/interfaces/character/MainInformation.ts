interface Animeography {
  mal_id: string;
  name: string;
  url: string;
  image_url: string;
  role: string;
}

interface Mangaography extends Animeography {}

interface VoiceActor {
  mal_id: string;
  name: string;
  url: string;
  image_url: string;
  language: string;
}

export default interface MainInformation {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  url: string;
  name: string;
  name_kanji: string;
  nicknames: string[]
  about: string;
  member_favourites: number;
  image_url: string;
  animeography: Animeography[]
  mangaography: Mangaography[]
  voice_actors: VoiceActor[]
}
