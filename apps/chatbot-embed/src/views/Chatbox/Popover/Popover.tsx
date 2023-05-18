import { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Popover } from 'components/Popover';
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
  content: $`
    br-min-w-[400px]
    br-max-w-[500px]
    br-rounded-lg
    br-p-1
    br-z-10
    br-bg-white
  `,
  closeButton: $`
    br-absolute
    br-top-[-2.5rem]
    br-right-0
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

export const PopoverChat: FC = () => {
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
    <Popover open={open}>
      <Popover.Trigger className={styles.trigger} asChild>
        <button onClick={handleOpen} className={styles.button}>
          <Logo className={styles.img} />
          Client Support
        </button>
      </Popover.Trigger>
      <Popover.Content
        className={styles.content}
        id='biggs-realty-chatbox'
        side='top'
        align='end'
        sideOffset={14}
        onInteractOutside={handleClose}
      >
        <Box id='biggs-realty-chatbox-content' />
        <button onClick={handleClose} className={styles.closeButton}>
          <Cross2Icon />
        </button>
      </Popover.Content>
    </Popover>
  );
};
