function TodoItem(props) {
    const { item, setActivityArr, activityArr } = props; 

    function handleDelete() {
        const updatedArr = activityArr.filter(activity => activity.id !== item.id);
        setActivityArr(updatedArr); 
    }

    return (
        <div className="flex justify-between">
            <p>
                {props.index + 1}. {item.activity}
            </p>
            <button className="text-red-500" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
