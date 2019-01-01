import React from 'react';

const Option = (props) => (
        <div>
         {props.optionText}
         <a href="#" onClick={ (e) => {
             props.handleDeleteOption(props.optionText);
         }}>remove</a>
        </div>
        );

export default Option;