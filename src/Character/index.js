import React from 'react'

export default function Character (charColor, x, y){
    var character = {
        width: 25,
        height:25,
        color: charColor,
        xpos: x,
        ypos: y,
    }
    return character;
}