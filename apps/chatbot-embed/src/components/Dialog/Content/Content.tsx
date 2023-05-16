import * as RadixDialog from '@radix-ui/react-dialog';
import { $ } from 'utils/classes';

const styles = {
  content: $`
    data-[state=open]:br-animate-dialog-content
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

type ContentProps = RadixDialog.DialogContentProps & {
  description?: string;
  onClose?: () => void;
};

export const Content: FC<ContentProps> = ({
  children,
  title,
  description,
  className,
  onClose,
  ...props
}) => {
  return (
    <RadixDialog.Content {...props} className={$`${className} ${styles.content} br-p-2`}>
      {!!title && (
        <RadixDialog.Title className={$`br-flex br-font-light br-text-black`}>
          {title}
        </RadixDialog.Title>
      )}
      {!!description && (
        <RadixDialog.Description className={$`br-text-xs`}>{description}</RadixDialog.Description>
      )}
      <div>{children}</div>
    </RadixDialog.Content>
  );
};

Content.displayName = 'Dialog.Content';
