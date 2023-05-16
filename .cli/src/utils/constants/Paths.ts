import { join } from 'path';

const REPO = join(__dirname, '../../');
const PROJECT = join(REPO, '.cli');

export const PATHS = {
  REPO,
  PROJECT,
  METADATA_FILE: join(PROJECT, '.metadata.json'),
} as const;

export type Paths = KeysAndValuesOf<typeof PATHS>;
