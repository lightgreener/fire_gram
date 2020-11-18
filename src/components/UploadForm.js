import React, { useState } from 'react'

const UploadForm = () => {

    const [file, setFile] = useState( null );
    const [error,setError] = useState( null );

    const types = ['image/png','image/jpeg'];

    const _handleOnChange = (e) => {
        console.log("working");
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('please select an image file (png or jpeg)')
        }
    }

    return (
       <form>
           <label>
               <input type ="file" onChange={ _handleOnChange} />
               <span>+</span>
           </label>
           <div className='output'>
               { error && <div className ='error'>{ error }</div>}
               { file && <div>{ file.name }</div>}
           </div>
       </form>
    )
}

export default UploadForm;
