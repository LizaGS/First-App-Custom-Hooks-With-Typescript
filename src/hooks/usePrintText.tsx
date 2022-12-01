import formatedTimestamp from "../utils/formatedTimestamps";
import { useState } from 'react';

interface useDatasProps {
    datas: string[]
}

const usePrintText = () => {

    const [datas, setDatas] = useState<useDatasProps['datas']>([]);

    function print(t: string) {
        setDatas([
            ...datas,
            formatedTimestamp().concat(t)
        ]);
    }
    return { print, datas }
}

export default usePrintText
