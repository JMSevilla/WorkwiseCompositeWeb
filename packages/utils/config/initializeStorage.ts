/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
export type SetValue<T> = (value: T | ((storedValue: T) => T)) => void;

import { useCallback } from "react";
import { clear, getItem, removeItem, setItem } from "../local-storage";

export function initializeStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>, () => void] {
  const setValue: SetValue<T> = (value) => {
    const valueToStore =
      value instanceof Function ? value(getItem<T>(key)!) : value;
    setItem<T>(key, valueToStore);
  };
  const getValue = (): T => {
    if (typeof window === "undefined") return initialValue;
    return getItem<T>(key) ?? initialValue;
  };
  const clearValue = useCallback(() => removeItem(key), []);
  return [getValue(), setValue, clearValue];
}

export const clearSession = () => clear();
