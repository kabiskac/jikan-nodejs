import api from '../../api';

import MainInformation from '../../interfaces/character/MainInformation';

export default async function mainInformation(
  mal_id: number,
): Promise<MainInformation> {
  const { data: item } = await api.get<MainInformation>(`/person/${mal_id}`);

  return item;
}
