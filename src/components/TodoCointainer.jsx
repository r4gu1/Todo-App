import { useState } from "react";
import Todolist from "./Todolist";
import Addtodolist from "./Addtodolist";

function TodoContainer() {
    const [activityArr, setActivityArr] = useState([
        { id: 1, activity: "Go for a walk" },
        { id: 2, activity: "Take a Shower" },
    ]);

    return (
        <div className="flex gap-5">
            <Addtodolist activityArr={activityArr} setActivityArr={setActivityArr} />
            <Todolist activityArr={activityArr} setActivityArr={setActivityArr} />
        </div>
    );
}

export default TodoContainer;
