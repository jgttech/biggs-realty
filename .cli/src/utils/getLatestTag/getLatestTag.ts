import { $ } from 'execa';

type Tag = `${string}.${string}.${string}`;

export const getLatestTag = async (): Promise<Tag> => {
  // Loads the most recent tags into our local git instance.
  await $`git fetch --tags origin`;

  // Get the latest git tag.
  const { stdout: hash } = await $`git rev-list --tags --max-count=1`;
  const { stdout: tag } = await $`git describe --tags ${hash}`;

  return tag as Tag;
};
