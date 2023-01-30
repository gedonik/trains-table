import {useState} from "react";

export const useFetching = (callback: Function, setIsLoading: Function): [Function, any] => {
    const [error, setError] = useState('');

    const fetching = async (): Promise<void> => {
        try {
            setIsLoading(true);
            await callback()
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, error]
}
