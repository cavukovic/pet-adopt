import {useEffect, useRef} from 'react';
import {createPortal} from "react-dom";

const Modal = ({ children }) => {
    const elRef = useRef(); // ref is a container to give yourself back the same thing every time 

    if (!elRef.current){
        elRef.current = document.createElement('div');
    }

    useEffect(() => { 
        const modalRoot = document.getElementById('modal');
        modalRoot.appendChild(elRef.current);

        return () => { 
            modalRoot.removeChild(elRef.current); // when you return something from an effect, it will run when the component unmounts
        }

    }, []); // [] bc we only want it to happen once

    return createPortal(<div>{children}</div>,  elRef.current);
}

export default Modal;