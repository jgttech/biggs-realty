import { Dialog } from 'components/Dialog';

export const App: FC = () => (
  <Dialog>
    <Dialog.Trigger>
      <div className='br-fixed br-right-5 br-bottom-5 br-p-3 br-bg-green-500 br-rounded'>
        Click me!
      </div>
    </Dialog.Trigger>
    <Dialog.Content>Hello Beau!</Dialog.Content>
  </Dialog>
);
