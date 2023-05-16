import * as RadixDialog from '@radix-ui/react-dialog';
import { $ } from 'utils/classes';

const styles = {
  content: $`
    data-[state=open]:animate-dialog-content
    br-fixed
    br-top-[50%]
    br-left-[50%]
    br-max-h-[85vh]
    br-w-[90vw]
    br-max-w-[450px]
    br-translate-x-[-50%]
    br-translate-y-[-60%]
    br-rounded-[6px]
    br-bg-white
    br-overflow-auto
    focus:br-outline-none
  `,
  title: $`
    br-m-0
  `,
  close: $`
    br-w-8
    br-rounded-full
    br-appearance-none
    hover:br-bg-blue-400
    focus:br-outline-none
    br-transition
    br-ease-in-out
    br-duration-300
  `,
};

const sizes = {
  md: {
    padding: $`
      br-px-10
      br-py-8
    `,
    title: $`
      br-mb-7
    `,
    emblem: $``,
    text: $`
      br-text-lg
    `,
    description: $`
      br-font-normal
    `,
  },
  sm: {
    padding: $`
      br-px-6
      br-py-5
    `,
    title: $`
      br-mb-3.5
    `,
    emblem: $`
      br-mr-1
    `,
    text: $`
      br-text-lg
    `,
    description: $`
      br-text-md
      br-font-normal
    `,
  },
  xs: {
    padding: $`
      br-px-5
      br-py-4
    `,
    title: $`
      br-mb-2.5
    `,
    emblem: $`
      br-mr-0.5
    `,
    text: $`
      br-text-md
    `,
    description: $`
      br-text-sm
      br-font-normal
    `,
  },
};

type ContentProps = RadixDialog.DialogContentProps & {
  description?: string;
  size?: 'md' | 'xs' | 'sm';
  onClose?: () => void;
};

export const Content: FC<ContentProps> = ({
  children,
  title,
  description,
  className,
  size,
  onClose,
  ...props
}) => {
  size = size || 'md';
  const sizing = sizes?.[size] || sizes.md;

  return (
    <RadixDialog.Content {...props} className={$`${className} ${styles.content} ${sizing.padding}`}>
      {!!title && (
        <RadixDialog.Title className={$`br-flex br-font-light br-text-black ${sizing.title}`}>
          Hello world!
        </RadixDialog.Title>
      )}
      {!!description && (
        <RadixDialog.Description className={$`${sizing.title} br-text-xs`}>
          Stuff and things!
        </RadixDialog.Description>
      )}
      <div className={$`${sizing.description}`}>{children}</div>
    </RadixDialog.Content>
  );
};

Content.displayName = 'Dialog.Content';
