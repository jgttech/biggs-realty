import { globSync } from 'glob';
import { join, parse } from 'path';
import { readJsonSync, existsSync } from 'fs-extra';
import { PATHS } from 'utils/constants';
import type { Workspace } from 'models/Workspace';

export const getWorkspaces = (byName?: string): undefined | Workspace | Workspace[] => {
  let wksp: Workspace | undefined;
  const { workspaces } = readJsonSync(join(PATHS.REPO, 'package.json'), 'utf-8');
  const validWorkspaces = workspaces.filter(wksp => wksp !== '.cli');
  const wkspDetected = globSync(validWorkspaces, { cwd: PATHS.REPO })
    .map(wksp => {
      const wkspPath = join(PATHS.REPO, wksp);
      const wkspPackageJson = join(wkspPath, 'package.json');

      return !existsSync(wkspPackageJson)
        ? undefined
        : {
            path: parse(wkspPackageJson),
            packageJson: readJsonSync(wkspPackageJson, 'utf-8'),
          };
    })
    .filter(Boolean) as Workspace[];

  if (wkspDetected && byName)
    wksp = wkspDetected.find(({ packageJson }) => packageJson.name === byName);

  return byName ? wksp : wkspDetected;
};
