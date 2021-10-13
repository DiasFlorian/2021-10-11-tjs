import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../../ui/Button/Button';

const initialState = {}
function MemeForm(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => {
        return () => {
            //willUnMount effect
        };
    }, [state])

    return (
        <div className={styles.MemeForm} data-testid="MemeForm">
            <form>
                <label htmlFor="titre">
                    <h1>Titre</h1>
                </label>
                <br />
                <input name="titre" id="titre" value={state.titre} />
                <hr />
                <label htmlFor="image">
                    <h2>Image</h2>
                </label>
                <br />
                <select name="image" id="image" value={state.imageId}>
                    <option value={-1}>No images</option>
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
                    value={state.text}
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
                    value={state.x}
                />
                <label htmlFor="y">
                    <h2 style={{ display: "inline" }}>y :</h2>
                </label>
                <input
                    className={styles.smallNumber}
                    name="y"
                    id="y"
                    type="number"
                    value={state.y}
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
                    value={state.color}
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
                    value={state.fontSize}
                    min={0}
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
                    value={state.fontWeight}
                    min={100}
                    step={100}
                    max={900}
                />
                <br />
                <input
                    name="underine"
                    id="underline"
                    type="checkbox"
                    checked={state.underline}
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
                    checked={state.italic}
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
              value={state.frameSizeX}
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
              value={state.frameSizeY}
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
    style: PropTypes.object,
    meme: PropTypes.object.isRequired,
    onFormChange: PropTypes.func.isRequired
};


export default MemeForm;
