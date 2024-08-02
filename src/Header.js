import React, { useEffect, useState } from 'react';

// XOR cipher encryption
const encrypt = (str, key) => {
    return btoa(str.split('').map((char, i) => {
        return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length));
    }).join(''));
};

// XOR cipher decryption
const decrypt = (str, key) => {
    return atob(str).split('').map((char, i) => {
        return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length));
    }).join('');
};

const MyComponent = () => {
    const [encryptedAttributes, setEncryptedAttributes] = useState({});
    const secretKey = 'qwqwt5656';

    useEffect(() => {
        const element = document.getElementById('root1');
        if (element) {
            const attrs = element.attributes;
            const encryptedAttrs = {};
            const DataAttrs = {};

            // Encrypt data attributes
            for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                if (attr.name.startsWith('data-')) {
                    DataAttrs[attr.name] = attr.value;
                    encryptedAttrs[attr.name] = encrypt(attr.value, secretKey);
                }
            }
            console.log(DataAttrs)
            // Set encrypted attributes to state
            setEncryptedAttributes(encryptedAttrs);

            //const element = divRef.current;
        //if (element) {
            // Iterate over the object's entries and set data attributes
            Object.entries(encryptedAttrs).forEach(([key, value]) => {
                element.setAttribute(`${key}`, value);
            });
        //}
        }
    }, []);

    // const decryptAttributes = () => {
    //     const decryptedAttrs = {};
    //     for (let key in encryptedAttributes) {
    //         decryptedAttrs[key] = decrypt(encryptedAttributes[key], secretKey);
    //     }
    //     return decryptedAttrs;
    // };

    return (
        <div>
            <div
                id="myDiv"
                data-secret="12345"
                data-info="Hello World"
                data-other="Other Data"
            >
                Content goes here...
            </div>
            
            
        
        </div>
    );
};

export default MyComponent;
