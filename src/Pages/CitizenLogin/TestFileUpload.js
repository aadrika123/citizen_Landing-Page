import React from 'react'
import axios from 'axios'

function TestFileUpload() {
    let formData = new FormData();

    const onFileChange = (e) => {
        console.log(e.target.files[0])

        if (e.target && e.target.files[0]) {
            formData.append('file', e.target.files[0]);
        }
    }
const SubmitFileData = () => {
    axios.post(
        'https://v2.convertapi.com/upload',
        {formData},
        console.log("forsm data",formData)
    )
    .then(res => {
        console.log(res);
    })
    .catch(error =>{
        console.log(error);
    })
}
    return (
        <>
        <input type="file" name="file_name"onChange={onFileChange} />
        <button onClick={SubmitFileData}>Submit Data</button>
        </>
    )
}

export default TestFileUpload
