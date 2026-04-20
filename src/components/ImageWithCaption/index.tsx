import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Props = {
  src: string;
  alt: string;
  caption: string;
};

export default function ImageWithCaption({ src, alt, caption }: Props) {
  const imageUrl = useBaseUrl(src);

  return (
    <figure style={{ marginLeft: 0, fontStyle: 'italic' }}>
      <img src={imageUrl} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}