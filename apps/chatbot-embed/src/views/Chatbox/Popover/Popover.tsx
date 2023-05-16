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
};

export const PopoverChat: FC = () => {
  const handleOpen = () => {
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

  return (
    <Popover>
      <Popover.Trigger className={styles.trigger} asChild>
        <button onClick={handleOpen}>
          <Logo className={styles.img} />
        </button>
      </Popover.Trigger>
      <Popover.Content
        className='br-min-w-[400px] br-max-w-[500px] br-rounded-lg br-p-1'
        id='biggs-realty-chatbox'
        side='top'
        align='end'
        sideOffset={14}
      >
        <Box id='biggs-realty-chatbox-content' />
      </Popover.Content>
    </Popover>
  );
};
