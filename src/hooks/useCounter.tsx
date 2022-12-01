import { useState } from 'react';

type useCounterProps = {
    count: number,
    buttons: number[],
}

const useCounter = () => {

    const [count, setCount] = useState<useCounterProps['count']>(1);
    const [buttons, setButtons] = useState<useCounterProps['buttons']>([]);

    const handleAddButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCount(count + 1)
        setButtons([
            ...buttons,
            count + 1
        ])
    }
    return { count, buttons, handleAddButton }
}

export default useCounter