import * as RadixPopover from '@radix-ui/react-popover';

type TriggerProps = RadixPopover.PopoverTriggerProps;

export const Trigger: FC<TriggerProps> = ({ children, ...props }) => (
  <RadixPopover.Trigger {...props}>{children}</RadixPopover.Trigger>
);

Trigger.displayName = 'Popover.Trigger';
