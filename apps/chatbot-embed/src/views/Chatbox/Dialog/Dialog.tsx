import { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Dialog } from 'components/Dialog';
import { Logo } from 'components/Logo';
import { Box } from 'components/Box';
import { $ } from 'utils/classes';
import { zapier } from 'utils/zapier';

const styles = {
  trigger: $`
    br-fixed
    br-right-6
    br-bottom-6
    br-rounded-full
  `,
  img: $`
    br-h-6
  `,
  content: $`
    br-rounded-lg
    br-p-1
    br-z-10
  `,
  button: $`
    br-px-5
    br-py-3
    br-gap-3
    br-flex
    br-justify-center
    br-items-center
    br-text-white
    br-bg-br-logo-blue
    br-transition-all
    br-duration-500
    hover:br-px-6
    hover:br-py-4
  `,
  closeButton: $`
    br-absolute
    br-right-4
    br-top-4
    br-p-2
    br-w-8
    br-h-8
    br-flex
    br-justify-center
    br-items-center
    br-cursor-pointer
    br-rounded-full
    br-bg-br-logo-blue
    br-text-white
    br-transition-all
    br-duration-500
    hover:br-w-9
    hover:br-h-9
  `,
};

export const DialogChat: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      const body = document.getElementsByTagName('body')[0];
      const content = document.querySelector('#biggs-realty-chatbox-content');

      if (body && content) {
        const script = zapier.script();
        const embed = zapier.embed();

        body.appendChild(script);
        content.appendChild(embed);
      }
    }, 1);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <Dialog.Trigger className={styles.trigger} asChild>
        <button onClick={handleOpen} className={styles.button}>
          <Logo className={styles.img} />
          Client Support
        </button>
      </Dialog.Trigger>
      <Dialog.Content
        id='biggs-realty-chatbox'
        className={styles.content}
        onInteractOutside={handleClose}
      >
        <Box id='biggs-realty-chatbox-content' />
        <button onClick={handleClose} style={{ zIndex: '11' }} className={styles.closeButton}>
          <Cross2Icon />
        </button>
      </Dialog.Content>
    </Dialog>
  );
};
