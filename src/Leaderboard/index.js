import './leaderboard.css'

export default function Leaderboard(props){
    const boardWidth = 600
    const boardHeight = 600
    const points = props.points

    return (
        <div id="leaderBoard" style={{width: boardWidth, height: boardHeight, borderWidth: boardWidth/2, background:"black", marginLeft: "auto", marginRight: "auto"}}>
            <h2 className="title" style={{color:"white"}}>Leaderboard: </h2>
            {points.map((point => {
                return <p style={{color:"white"}}> {point.name}: {point.score}</p>
            }))}
        </div>
    )

}