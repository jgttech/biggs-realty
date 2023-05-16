import * as RadixPopover from '@radix-ui/react-popover';
import { $ } from 'utils/classes';

type ContentProps = RadixPopover.PopoverContentProps;

const content = $`
  br-right-5
  br-hover-shadow
  br-rounded
  br-text-xs
  br-cursor-default
  br-outline-none
  br-will-change-[transform,opacity]
  data-[state=open]:data-[side=top]:br-animate-slide-down-and-fade
  data-[state=open]:data-[side=right]:br-animate-slide-left-and-fade
  data-[state=open]:data-[side=bottom]:br-animate-slide-up-and-fade
  data-[state=open]:data-[side=left]:br-animate-slide-right-and-fade
`;

export const Content: FC<ContentProps> = ({ children, className, ...props }) => (
  <RadixPopover.Content {...props} className={$`${className} ${content}`}>
    {children}
  </RadixPopover.Content>
);

Content.displayName = 'Popover.Content';
