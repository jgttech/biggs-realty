import { $ } from 'execa';

export const getLatestCommit = async () => (await $`git rev-parse HEAD`).stdout;
