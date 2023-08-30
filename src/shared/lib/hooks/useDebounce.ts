import { useCallback, useEffect, useState } from "react";

export function useDebounce(cb: () => void, delay: number) {
    return useCallback(() => { // вызывается при каждом изменении, надо убирать вызов коллбэека если есть уже другой вызов
        setTimeout(() => {
            cb();
        }, delay);
    }, [delay, cb]);
}
