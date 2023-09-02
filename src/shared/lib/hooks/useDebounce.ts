import { useCallback, useEffect, useState } from "react";

// export function useDebounce(cb: () => void, delay: number) {
//     return useCallback(() => { // вызывается при каждом изменении, надо убирать вызов коллбэека если есть уже другой вызов
//         setTimeout(() => {
//             cb();
//         }, delay);
//     }, [delay, cb]);
// }
// export function useDebounce(cb: () => void, delay: number) {
//      useCallback(() => {
//         const handler = setTimeout(() => {
//             cb();
//         }, delay);

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [cb, delay]);
// }
// export const useDebounce = (cb: () => void, delay: number) => {
  
//     useEffect(() => {
//       const handler = setTimeout(() => {
//         return cb()
//       }, delay);
  
//       return () => {
//         clearTimeout(handler);
//       };
//     }, [cb, delay]);
  
//   };
export function useDebounce(cb: (...args: any[]) => void, delay: number){
    let timer: any = null;
    return useCallback(
        (...args: any[]) => {
            if(timer){
                clearTimeout(timer);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timer = setTimeout(() => {
                cb(...args);
            }, delay);
        },
        [cb, delay, timer]
    )
}