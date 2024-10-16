import TodoItem from "./Todoitem";

function Todolist(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    return (
        <div style={{ backgroundColor: "#BDB4EA" }} className="border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activities</h1>

            {activityArr.length === 0 ? (
                <p>You haven't added anything yet.</p>
            ) : (
                activityArr.map((item, index) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        id={item.id}
                        index={index}
                        activityArr={activityArr}
                        setActivityArr={setActivityArr}
                    />
                ))
            )}
        </div>
    );
}

export default Todolist;
