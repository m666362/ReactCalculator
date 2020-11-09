import React, {useState} from 'react';
import {useOvermind} from './OvermindHelper';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    //
}))
var num = 5;
const App = () => {
    const {state, actions} = useOvermind();
    const classes = useStyles();

    return (
        <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
              alignContent='center'>
            <h1>React Calculator</h1>
            <h1>{state.currentAnswer}</h1>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>7</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>8</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>9</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    actions.divide(2)
                }}>/</Button>
            </Grid>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>4</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>5</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>6</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    actions.multiply(2)
                }}>*</Button>
            </Grid>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>1</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>2</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>3</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    actions.substract(1)
                }}>-</Button>
            </Grid>

            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>CE</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>0</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {

                }}>.</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    actions.add(1)
                }}>+</Button>
            </Grid>

        </Grid>
    );
};

export default App;