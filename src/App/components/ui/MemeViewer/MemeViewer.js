import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';
export const demoMeme =  {
  meme: {
    id: 0,
    imageId: 0,
    text: 'Mon 1er meme je test si ça marche',
    x: 200,
    y: 200,
    fontSize: 50,
    fontWeight: '900',
    color: 'BLUE',
    underline: true,
    italic: false
  },
  image: {
    url: '/img/memes/1ermeme.jpg',
    titre: '1 er meme',
    id: 0,
    w: 1280,
    h: 853
  }
};


const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${props.image.w} ${props.image.h}`}>
    <image href={props.image.url} />
    <text x={props.meme.x} y={props.meme.y} fill={props.meme.color}
      style={
        {
          fontWeight: props.meme.fontWeight,
          fontSize: props.meme.fontSize,
          textDecoration: (props.meme.textDecoration ? 'underline' : 'none'),
          fontStyle: (props.meme.italic?'italic':'none')
        }
      }> 
      {props.meme.text}
      </text>
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
