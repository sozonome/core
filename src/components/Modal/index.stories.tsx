import * as React from 'react';
import { Flex, Button, Modal } from '..';

const modalSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full'];

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    size: {
      control: { type: 'select', options: modalSizes },
    },
  },
};

export const Simple = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
        <Flex p={4} align="center" justify="center">
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Flex>
      </Modal>
    </>
  );
};
