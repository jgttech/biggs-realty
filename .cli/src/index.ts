import 'colors';
import { runExit } from 'clipanion';
import { Build } from 'commands/Build';
import { Refresh } from 'commands/Refresh';
import { Release } from 'commands/Release';

export function main() {
  runExit([Refresh, Build, Release]);
}
