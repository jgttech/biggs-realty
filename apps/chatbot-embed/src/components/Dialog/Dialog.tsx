import * as RadixDialog from '@radix-ui/react-dialog';
import { useComponents } from 'hooks/useComponents';
import { $ } from 'utils/classes';
import { Trigger } from './Trigger';
import { Content } from './Content';

type DialogProps = {
  children?: Children;
};

type DialogFC = FC<DialogProps> & {
  Trigger: FC<InferProps<typeof Trigger>>;
  Content: FC<InferProps<typeof Content>>;
};

const styles = {
  overlay: $`
    br-data-[state=open]:animate-dialog-overlay
    br-fixed
    br-inset-0
    br-bg-[rgb(0,_0,_0,_0.25)]
  `,
};

export const Dialog: DialogFC = ({ children }) => {
  const [DialogTrigger] = useComponents(children, [Trigger]);
  const [DialogContent] = useComponents(children, [Content]);
  const hasRender = !!DialogTrigger && !!DialogContent;

  return (
    hasRender && (
      <RadixDialog.Root>
        {DialogTrigger}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className={styles.overlay} />
          <>{DialogContent}</>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    )
  );
};

Dialog.Trigger = Trigger;
Dialog.Content = Content;
