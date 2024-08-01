import React, {useEffect, useState} from 'react';

export default function AddressSearch(){
    const [dataAttrsNames, setDataAttrsNames] = useState([]);
    const [encryptionKey, setEncryptionKey] = useState('');

    useEffect(() => {
        const element = document.getElementById('root');
        setEncryptionKey(document.getElementById('root').dataset.googleMapsApiKey);
        if (element) {
            const attrs = element.firstChild.attributes;
            const dataAttrsNames  = [];

            
            for (let i = 0; i < attrs.length; i++) {    
                const attr = attrs[i];
                if (attr.name.startsWith('data-')) {
                    dataAttrsNames.push(attr.name);
                }
            }
            console.log(dataAttrsNames);
            setDataAttrsNames(dataAttrsNames);
        }

        encryptAllDataAttributes(element, encryptionKey);
    }, []); 

    function encryptAllDataAttributes(element, key) {
        //const attributes = element;
      
        for (let i = 0; i < dataAttrsNames.length; i++) {
            const attr = dataAttrsNames[i];
            //if (attr.startsWith('data-')) {
                const value = element.getAttribute(attr);
                const encryptedValue = encodedValue(value, key);
                element.setAttribute(attr, btoa(encryptedValue)); // Encode to base64 to ensure safe storage
            //}
        }
      }

      function encodedValue(data, key) {
        let result = '';
        for (let i = 0; i < data.length; i++) {
            result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
      }
    return <>
    <div>this is the AddressSearch component</div>
    </>
}
