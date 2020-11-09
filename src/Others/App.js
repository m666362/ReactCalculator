import React, {useState} from 'react';
import {useOvermind} from './OvermindHelper';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {act} from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    //
}))

var num = 0;
const App = () => {
    const {state, actions} = useOvermind();
    const classes = useStyles();

    return (
        <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
              alignContent='center'>
            {/*<h1>React Calculator</h1>*/}
            <h1>{state.currentAnswer}</h1>
            <p>Input: {state.putValue}</p>
            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                        num = num * 10 + 7;
                        actions.setPutValue(num);
                }}>7</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 8;
                        actions.setPutValue(num);
                }}>8</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 9;
                        actions.setPutValue(num);
                }}>9</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    if (state.putCondition==true){

                        actions.divide(2)
                        num = 0;
                    }
                }}>/</Button>
            </Grid>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 4;
                        actions.setPutValue(num);
                }}>4</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 5;
                        actions.setPutValue(num);
                }}>5</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 6;
                        actions.setPutValue(num);
                }}>6</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    if (state.putCondition==true){

                        actions.multiply(2)
                        num = 0;
                    }
                }}>*</Button>
            </Grid>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 1;
                        actions.setPutValue(num);
                }}>1</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 2;
                        actions.setPutValue(num);
                }}>2</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num = num * 10 + 3;
                        actions.setPutValue(num);
                }}>3</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    if (state.putCondition==true){
                        actions.substract(1)
                        num = 0;
                    }
                }}>-</Button>
            </Grid>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    num = 0;
                    actions.setPutValue(num)
                    actions.setCurrentAnswer()
                }}>CE</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    
                        num *= 10;
                        actions.setPutValue(num);
                }}>0</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>.</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    if (state.putCondition==true){
                        actions.add()
                        num = 0;
                    }
                }}>+</Button>
            </Grid>

        </Grid>
    );
};

export default App;