import { useState } from 'react'
import usePrintText from './usePrintText';

type useButtonPrps = {
    message: string
}

const useButtonClick = () => {

    const [message, setMessage] = useState<useButtonPrps['message']>('');

    const handleMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.currentTarget.disabled = true;
    }
    return {
        message,
        setMessage,
        handleMessage
    }
}

export default useButtonClick
