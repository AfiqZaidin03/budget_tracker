import React from 'react';

function Form() {
  return (
    <FormStyled>
        <div className='input-control'>
            <input type='text' />
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
`;
export default Form