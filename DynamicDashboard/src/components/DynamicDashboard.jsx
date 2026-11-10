function DynamicDashboard () {
    const userName = 'Megan';

    const isPremiumUser = true;

    const tasks = [
        {
            taskName: "Think about final project",
            completed: true
        },
        {
            taskName: "Panic about final project",
            completed: true
        },
        {
            taskName: "Think again about final project",
            completed: false
        },
        {
            taskName: "Panic again about final project",
            completed: false
        }
    ];

    const currentDate = new Date().toLocaleDateString();

      const completedCount = tasks.filter((task) => task.completed).length;

  const incompleteCount = tasks.filter((task) => !task.completed).length;

    return (
        <div>
            <h2>{currentDate}</h2>
            <h1>Welcome {userName}!</h1>
            <p>
                {isPremiumUser
                ? "Thank you for being a premium member!"
                : "Upgrade to premium to enjoy exclusive features!"}
            </p>
            <h2>Task List</h2>
                <ul>
                    {tasks.map((task) => (
                    <li
                        key={task.taskName}
                        style={{color: task.completed ? "green" : "black"}}
                    >
                        {task.taskName}
                        {task.completed ? " ✅" : " ❌"}
                    </li>
                    ))}
                </ul>
                <p>Completed Tasks: {completedCount}</p>
                <p>Incomplete Tasks: {incompleteCount}</p>
        </div>
    )
}

export default DynamicDashboard;