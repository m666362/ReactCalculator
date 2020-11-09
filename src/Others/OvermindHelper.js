// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        currentAnswer: 0
    },
    actions: {
        add({state}, number) {
            state.currentAnswer += number;
        },
        substract({state}, number) {
            state.currentAnswer -= number;
        },
        multiply({state}, number) {
            state.currentAnswer *= number;
        },
        divide({state}, number) {
            state.currentAnswer /=  number;
        }
    }
});
