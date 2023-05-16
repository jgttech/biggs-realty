import { getLatestTag } from '../getLatestTag';

type Tag = ReturnType<typeof getLatestTag>;

export const getUpdatedTag = async (update?: 'major' | 'minor' | 'patch'): Promise<Tag> => {
  const tag = await getLatestTag();
  let [major, minor, patch] = tag.split('.').map(Number);

  if (update === 'major') {
    ++major;
    minor = 0;
    patch = 0;
  } else if (update === 'minor') {
    ++minor;
    patch = 0;
  } else if (update === 'patch') {
    ++patch;
  }

  return [major, minor, patch].join('.') as unknown as Tag;
};
