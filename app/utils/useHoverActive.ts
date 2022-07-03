// https://mario-duarte.github.io/react-inView/
import { useEffect, useCallback, MutableRefObject } from 'react';

export default function useInView(
    ref: MutableRefObject<HTMLButtonElement>,
    remRef: MutableRefObject<HTMLButtonElement>[],
    ) {


    useEffect(() => {
        if (ref.current) {
            console.log(ref.current);
        }
        if (remRef.every(r => r.current)) {
            console.log(remRef);
        }
    }, [ref, remRef]);

}