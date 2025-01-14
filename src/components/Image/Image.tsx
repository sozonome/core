import * as React from 'react';
import { useImage } from '../../hooks/useImage';
import { SxProp, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, SxProp {
  /** Fallback component for the image. This is shown when the image is loading. */
  fallback?: React.ReactElement;
  /** Fallback src image. If you intend to use this instead of a component, it's advised to use a data src. */
  fallbackSrc?: string;
  /** Image src. */
  src?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { sx, crossOrigin, fallback, fallbackSrc, src, ...rest } = props;

  const { status } = useImage(src, crossOrigin);

  const styles = useComponentStyles('Image', props);

  if (status !== 'loaded') {
    return fallback || <Box ref={ref} as="img" sx={styles} src={fallbackSrc} {...rest} />;
  }

  return <Box ref={ref} as="img" sx={styles} src={src} {...rest} />;
});

Image.displayName = 'Image';
