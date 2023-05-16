import * as RadixPopover from '@radix-ui/react-popover';
import { useComponents } from 'hooks/useComponents';
import { $ } from 'utils/classes';
import { Trigger } from './Trigger';
import { Content } from './Content';

type PopoverProps = RadixPopover.PopoverProps;

type PopoverFC = FC<PopoverProps> & {
  Trigger: FC<InferProps<typeof Trigger>>;
  Content: FC<InferProps<typeof Content>>;
};

export const Popover: PopoverFC = ({ children, ...props }) => {
  const [PopoverTrigger] = useComponents(children, [Trigger]);
  const [PopoverContent] = useComponents(children, [Content]);

  return (
    <RadixPopover.Root {...props}>
      {PopoverTrigger}
      <RadixPopover.Portal>
        <>{PopoverContent}</>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

Popover.Trigger = Trigger;
Popover.Content = Content;
