import api from '../../api';

import MainInformation from '../../interfaces/character/MainInformation';

export default async function mainInformation(
  mal_id: number,
): Promise<MainInformation> {
  const { data: item } = await api.get<MainInformation>(`/character/${mal_id}`);

  return item;
}
