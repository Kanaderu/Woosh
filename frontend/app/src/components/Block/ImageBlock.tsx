import React from 'react';
import DivBlock from './DivBlock';

interface ImageBlockProps {
  src: string;
  center: boolean;
  alt?: string;
};

const ImageBlock: React.FC<ImageBlockProps> = (props) => {

  return (
    <>
      <DivBlock center={ props.center } value={"<img src=" + props.src + " alt=" + props.alt + " />"} />
    </>
  )
};

ImageBlock.defaultProps = {
  alt: "",
  center: true
};

export default ImageBlock;
