import api from '../api';

import AnimeMainInformation from '../interfaces/anime/MainInformation';
import MangaMainInformation from '../interfaces/manga/MainInformation';
import CharacterMainInformation from '../interfaces/character/MainInformation';

export default async function itemsById(
  type: 'anime' | 'manga' | 'character',
  mal_id: number,
): Promise<AnimeMainInformation | MangaMainInformation | CharacterMainInformation> {
  const { data: item } = await api.get<
    AnimeMainInformation | MangaMainInformation | CharacterMainInformation
  >(`/${type}/${mal_id}`);

  return item;
}
