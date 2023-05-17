import { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import { motion, AnimatePresence } from 'framer-motion';
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
    br-rounded-full
    br-w-12
    br-h-12

    br-transition-all
    br-duration-500
    hover:br-w-14
    hover:br-h-14
  `,
  button: $`
    br-flex
    br-justify-center
    br-items-center
    br-bg-br-logo-blue
    br-text-white
    br-pr-4
  `,
  icon: $`
    br-absolute
    br-top-[-2.5rem]
    br-right-0
    br-p-2
    br-w-8
    br-h-8
    br-transition-all
    br-duration-300
    hover:br-w-9
    hover:br-h-9
    hover:br-bg-blue-500
    br-cursor-pointer
    br-rounded-full
    br-bg-br-logo-blue
    br-text-white
  `,
};

export const PopoverChat: FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  return (
    <Portal>
      <AnimatePresence mode='wait'>
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Popover open={open}>
              <Popover.Trigger className={styles.trigger} asChild>
                <button onClick={handleOpen} className={styles.button}>
                  <Logo className={styles.img} />
                  Client Support
                </button>
              </Popover.Trigger>
              <Popover.Content
                className='br-min-w-[400px] br-max-w-[500px] br-rounded-lg br-p-1 br-bg-white br-z-10'
                id='biggs-realty-chatbox'
                side='top'
                align='end'
                sideOffset={14}
                onInteractOutside={handleClose}
              >
                <Box id='biggs-realty-chatbox-content' />
                <Cross2Icon className={styles.icon} onClick={handleClose} />
              </Popover.Content>
            </Popover>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
