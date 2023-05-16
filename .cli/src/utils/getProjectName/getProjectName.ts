import { readJsonSync } from 'fs-extra';
import { join } from 'path';
import { PATHS } from '../constants';

export const getProjectName = () => {
  const { name } = readJsonSync(join(PATHS.REPO, 'package.json'), 'utf-8');
  return name as string;
};
