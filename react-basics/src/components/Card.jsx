function Card(props){
    return (
        <div className="border-4 h-1/6 w-1/6">
        <h1 className="font-extrabold">Name: {props.name}</h1>
        <p className="font-extrabold">Age: {props.age}</p>
        <p className="font-extrabold">Gender: {props.gender}</p>
        <img src={props.image} alt="irfan image" />
        </div>
    )
}

export default Card
