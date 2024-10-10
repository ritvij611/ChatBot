import React, { useState } from 'react';

export const CopyToClipboard = ({textData}) =>{
    const [copied, setcopied] = useState(false);
    const copyToClipboard = async() => {
        try{
            await navigator.clipboard.writeText(textData);
            setcopied(true);
        }
        catch(err){
            console.error(err);
            setcopied(false)
        }
        setTimeout(()=>setcopied(false), 3000);
    };

    return(
        <button onClick={copyToClipboard}>
            {copied?'copied!':"copy"}
        </button>
    );

}