// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        currentAnswer: 0,
        putValue: 0,
        putCondition: false
    },
    actions: {
        setCurrentAnswer({state}){
            state.currentAnswer = 0;
        },
        setPutValue({state}, number){
            state.putValue = number;
            state.putCondition = true
        },
        add({state}) {
            state.currentAnswer += state.putValue;
            state.putValue = 0;
            state.putCondition = false
        },
        substract({state}) {
            state.currentAnswer -= state.putValue;
            state.putValue = 0;
            state.putCondition = false
        },
        multiply({state}) {
            state.currentAnswer *= state.putValue;
            state.putValue = 0;
            state.putCondition = false
        },
        divide({state}) {

            if (state.putValue==0){
                state.currentAnswer = 0
            }else{
                state.currentAnswer /=  state.putValue;
            }
            state.putValue = 0;
            state.putCondition = false
        }
    }
});
