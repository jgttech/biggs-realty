import { useEffect, useRef, useState } from 'react';
import { Dialog } from 'components/Dialog';
import { Logo } from 'components/Logo';
import { Box } from 'components/Box';
import { $ } from 'utils/classes';

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
};

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (update: boolean) => {
    setOpen(update);
  };

  useEffect(() => {
    if (open) {
      alert('OPEN!!!');
    }
  }, [open]);

  return (
    <Dialog onOpenChange={handleOpen} open={open}>
      <Dialog.Trigger className={styles.trigger}>
        <Logo className={styles.img} />
      </Dialog.Trigger>
      <Dialog.Content>
        <Box ref={ref} />
      </Dialog.Content>
    </Dialog>
  );
};
