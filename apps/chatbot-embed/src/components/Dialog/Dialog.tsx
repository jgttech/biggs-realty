import * as RadixDialog from '@radix-ui/react-dialog';
import { useComponents } from 'hooks/useComponents';
import { $ } from 'utils/classes';
import { Trigger } from './Trigger';
import { Content } from './Content';

type DialogProps = RadixDialog.DialogProps;

type DialogFC = FC<DialogProps> & {
  Trigger: FC<InferProps<typeof Trigger>>;
  Content: FC<InferProps<typeof Content>>;
};

const styles = {
  overlay: $`
    data-[state=open]:br-animate-dialog-overlay
    br-fixed
    br-inset-0
    br-bg-[rgb(0,_0,_0,_0.2)]
  `,
};

export const Dialog: DialogFC = ({ children, ...props }) => {
  const [DialogTrigger] = useComponents(children, [Trigger]);
  const [DialogContent] = useComponents(children, [Content]);

  return (
    <RadixDialog.Root {...props}>
      {DialogTrigger}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <>{DialogContent}</>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Dialog.Trigger = Trigger;
Dialog.Content = Content;
