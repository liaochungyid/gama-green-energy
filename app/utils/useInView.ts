// https://mario-duarte.github.io/react-inView/
import { useEffect, useCallback, MutableRefObject } from 'react';

export default function useInView(
    ref: MutableRefObject<HTMLDivElement>,
    { root = 'body', rootMargin = '0px', threshold = 1.0 }: { root: string, rootMargin: string, threshold: number | number[]},
    entryCallback: (arg0?: IntersectionObserverEntry) => void,exitCallback: (arg0?: IntersectionObserverEntry) => void) {

    const intersectionCallback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeof entryCallback == 'function' ? entryCallback(entry) : console.warn('No entry callback provided...skipping');
            } else {
                typeof exitCallback == 'function' ? exitCallback(entry) : console.warn('No exit callback provided...skipping');
            }
        });
    }, [entryCallback, exitCallback]);

    const setObserverCallback = useCallback(() => {
        const options = {
            root: document.querySelector(root),
            rootMargin: rootMargin,
            threshold: threshold
        }

        let observer = new IntersectionObserver(intersectionCallback, options);
        let target = ref.current;
        observer.observe(target);

    }, [intersectionCallback, root, ref, rootMargin, threshold]);

    useEffect(() => {
        if (ref.current) {
            setObserverCallback();
        }
    }, [ref, setObserverCallback]);

}