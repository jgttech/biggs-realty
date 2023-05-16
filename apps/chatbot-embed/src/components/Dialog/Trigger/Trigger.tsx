import * as RadixDialog from '@radix-ui/react-dialog';

type TriggerProps = RadixDialog.DialogTriggerProps;

export const Trigger: FC<TriggerProps> = ({ children, ...props }) => (
  <RadixDialog.Trigger {...props}>{children}</RadixDialog.Trigger>
);

Trigger.displayName = 'Dialog.Trigger';
