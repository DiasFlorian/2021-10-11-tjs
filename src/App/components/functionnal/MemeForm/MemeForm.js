import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../../ui/Button/Button';
import store, { initialMeme } from '../../../store/store';


const initialState = {
    images: [],
    current: initialMeme
};


function MemeForm(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => {
        setstate({
            images: store.getState().list.images,
            current: store.getState().current
        });
        store.subscribe(() => {
            setstate({
                images: store.getState().list.images,
                current: store.getState().current
            });
        })
    }, [1])

    return (
        <div className={styles.MemeForm} data-testid="MemeForm">
            <form>
                {/*<label htmlFor="titre">
                    <h1>Titre</h1>
                </label>
                <br />
                <input name="titre" id="titre" value={state.current.titre} />
                <hr />*/}
                <label htmlFor="image">
                    <h2>Image</h2>
                </label>
                <br />
                <select name="image" id="image" value={state.current.imageId} 
                onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state, imageId:Number(evt.target.value)}})}}>
                    <option value={-1}>No images</option>
                    {state.images.map((e,i)=><option value={e.id} key={`select-image-${i}`}>{e.titre}</option>)}
                </select>
                <hr />
                <label htmlFor="text">
                    <h2>texte</h2>
                </label>
                <br />
                <input
                    name="text"
                    id="text"
                    type="text"
                    value={state.current.text}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, text:evt.target.value}})}}
                />
                <br />
                <label htmlFor="x">
                    <h2 style={{ display: "inline" }}>x :</h2>
                </label>
                <input
                    className={styles.smallNumber}
                    name="x"
                    id="x"
                    type="number"
                    value={state.current.x}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, x:Number(evt.target.value)}})}}
                />
                <label htmlFor="y">
                    <h2 style={{ display: "inline" }}>y :</h2>
                </label>
                <input
                    className={styles.smallNumber}
                    name="y"
                    id="y"
                    type="number"
                    value={state.current.y}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, y:Number(evt.target.value)}})}}
                />
                <hr />
                <br />
                <h2>Decorations</h2>
                <label htmlFor="color">
                    <h2 style={{ display: "inline" }}>color :</h2>
                </label>
                <input
                    name="color"
                    id="color"
                    type="color"
                    value={state.current.color}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, color:evt.target.value}})}}
                />
                <br />
                <label htmlFor="fontSize">
                    <h2 style={{ display: "inline" }}>font-size :</h2>
                </label>
                <input
                    className={styles.smallNumber}
                    name="fontSize"
                    id="fontSize"
                    type="number"
                    value={state.current.fontSize}
                    min={0}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, fontSize:Number(evt.target.value)}})}}
                />
                px
                <br />
                <label htmlFor="fontWeight">
                    <h2 style={{ display: "inline" }}>font-weight :</h2>
                </label>
                <input
                    className={styles.smallNumber}
                    name="fontWeight"
                    id="fontWeight"
                    type="number"
                    value={state.current.fontWeight}
                    min={100}
                    step={100}
                    max={900}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, fontWeight:evt.target.value}})}}
                />
                <br />
                <input
                    name="underine"
                    id="underline"
                    type="checkbox"
                    checked={state.current.underline}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, underline:evt.target.checked}})}}
                />
                &nbsp;
                <label htmlFor="underline">
                    <h2 style={{ display: "inline" }}>underline</h2>
                </label>
                &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
                <label htmlFor="italic">
                    <h2 style={{ display: "inline" }}>italic</h2>
                </label>
                &nbsp;
                <input
                    name="italic"
                    id="italic"
                    type="checkbox"
                    checked={state.current.italic}
                    onChange={(evt)=>{store.dispatch({type:'UPDATE_CURRENT', value:{...state.current, italic:evt.target.checked}})}}
                />
                <hr />
                {/* <br />
            <label htmlFor="frameSizeX">
              <h2 style={{ display: "inline" }}>frame size X :</h2>
            </label>
            <input
              className={styles.smallNumber}
              name="frameSizeX"
              id="frameSizeX"
              type="number"
              value={state.current.frameSizeX}
              min={0}
              />
            px{" "}
            <label htmlFor="frameSizeY">
              <h2 style={{ display: "inline" }}>frame size y :</h2>
            </label>
            <input
              className={styles.smallNumber}
              name="frameSizeY"
              id="frameSizeY"
              type="number"
              value={state.current.frameSizeY}
              min={0}
              />
            px */}
                <br />
                <Button
                    style={{ display: "inline" }}
                    bgColor="red"
                    text="reset"
                ></Button>
                <Button
                    style={{ display: "inline" }}
                    bgColor="green"
                    text="save"
                ></Button>
            </form>
        </div>
    );

}


MemeForm.propTypes = {
    // style: PropTypes.object,
    // meme: PropTypes.object.isRequired,
    // onFormChange: PropTypes.func.isRequired
};


export default MemeForm;
