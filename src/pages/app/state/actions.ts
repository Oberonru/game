import { createAction } from "@reduxjs/toolkit";

const PREFIX = 'App';
const withPrefix = (name: string) => `${PREFIX}/${name}`;

export const initApp = createAction(withPrefix('initApp'));
