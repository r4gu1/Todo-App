function Card(props) {
    return (
        <div style={{ backgroundColor: props.bgColor }} className="border rounded-md py-5 px-10 text-center flex-grow">
            <h1 className="font-medium text-2xl">{props.title}</h1>
            <p className="font-mono">{props.subtitle}</p>
        </div>)
}
export default Card