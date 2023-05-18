import { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import { Chatbox } from 'views/Chatbox';

export const App: FC = () => {
  const [visible, setVisible] = useState(false);
  const matches = useMediaQuery('only screen and (max-width: 500px)');

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
            {!matches && <Chatbox.Popover />}
            {matches && <Chatbox.Dialog />}
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
