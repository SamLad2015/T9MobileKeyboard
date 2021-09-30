import { T9key } from '@testnx/api-interfaces';

export const T9Key = (props: T9key) => {
  return (
    <>
      <span key={props.keyNum}>{props.keyNum}{props.keyChars}</span>
    </>
  );
};
