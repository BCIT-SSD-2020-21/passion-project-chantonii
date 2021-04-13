
export default function Character (charName, charColor, x, y){
    var character = {
        name: charName,
        width: 25,
        height:25,
        color: charColor,
        xpos: x,
        ypos: y,
    }

    const updatePos = (newX,newY) =>{
        character.xpos = newX;
        character.ypos = newY;
    }


    return character;
}