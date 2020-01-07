import React from 'react';

interface DivBlockProps {
  value: string,
  center?: boolean
};

const DivBlock: React.FC<DivBlockProps> = (props) => {

  if(props.center) {
    return (
      <>
        <div className="text-center" dangerouslySetInnerHTML={{ __html: props.value }} />
      </>
    );
  } else {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: props.value }} />
      </>
    );
  }
}

DivBlock.defaultProps = {
  center: false
};

export default DivBlock;
