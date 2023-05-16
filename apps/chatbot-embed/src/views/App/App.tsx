import { useState } from 'react';
import logo from 'public/biggs-realty.png';
import { Dialog } from 'components/Dialog';
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
  const [open, setOpen] = useState(false);
  const handleOpen = (update: boolean) => {
    setOpen(update);
  };

  return (
    <Dialog onOpenChange={handleOpen} open={open}>
      <Dialog.Trigger className={styles.trigger}>
        <img src={logo} alt='Click' className={styles.img} />
      </Dialog.Trigger>
      <Dialog.Content>Hello Beau!</Dialog.Content>
    </Dialog>
  );
};
