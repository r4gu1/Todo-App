import { useState } from "react";

function Addtodolist(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newArr, setNewArr] = useState("");

    function handleAdd(evt) {
        setNewArr(evt.target.value);
    }

    function addActivity() {
        if (newArr.trim()) {
            setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newArr }]);
            setNewArr(""); 
        }
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input
                    value={newArr}
                    onChange={handleAdd}
                    type="text"
                    placeholder="What's Next?"
                    className="border border-black bg-transparent p-1"
                />
                <button className="border border-black bg-black text-white p-1" onClick={addActivity}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Addtodolist;
