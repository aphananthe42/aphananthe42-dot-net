import { en } from "./en";
import { ja } from "./ja";

export const translations = { en, ja };
export type Locale = keyof typeof translations;
