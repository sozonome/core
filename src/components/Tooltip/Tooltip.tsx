import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { useComponentStyles } from '../../system';
import { Box } from '../Box';
import { PopperProps, usePopper } from '../Popper';

const Motion = styled(motion.div)({});

const variants: Variants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { duration: 0.1 },
  },
};

export interface TooltipProps extends Pick<PopperProps, 'placement' | 'offset'> {
  isDisabled?: boolean;
  label: string;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, isDisabled, label, placement, offset, ...rest } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const { triggerProps, childProps, onOpen, onClose } = usePopper({ isOpen, setIsOpen, placement, offset });

  const styles = useComponentStyles('Tooltip', props);

  return (
    <>
      {React.cloneElement(<span>{children}</span>, { ...triggerProps, onMouseEnter: onOpen, onMouseLeave: onClose })}
      {!isDisabled && (
        <Motion {...childProps} initial="hidden" animate={isOpen ? 'visible' : 'hidden'} variants={variants}>
          <Box sx={styles} {...rest}>
            {label}
          </Box>
        </Motion>
      )}
    </>
  );
};

Tooltip.defaultProps = {
  placement: 'bottom-start',
  offset: [0, 4],
};

Tooltip.displayName = 'Tooltip';