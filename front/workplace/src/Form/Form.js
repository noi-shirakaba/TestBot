import React, {useRef} from 'react';

const Form = (props) => {
	const textRef = useRef(null)
	const inputTextPostMethod = () => {
		const value = textRef.current.value
		console.log("Django側にPOST"+value)
  };
  return (
		<div>
      <form>
    		<input type="text" ref={textRef} />
  			<input type="submit" onClick={inputTextPostMethod} value="Submit" />
			</form>
    </div>
  );
};

export default Form;
