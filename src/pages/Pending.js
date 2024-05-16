import React from "react";

const Pending = () => {
    const handleDelete = (id) => {
        // TODO: Implement delete functionality
    };

    const handleEdit = (id) => {
        // TODO: Implement edit functionality
    };
    const hard = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" },
    ];

    return (
        <div className="main-container" style={{ backgroundColor: "#242424" }}>
            <div className="main-title font-bold pb-10 text-2xl">
                <h3>PENDING</h3>
            </div>
            <table
                className="min-w-full rounded-lg overflow-hidden"
                style={{ backgroundColor: "#242424" }}
            >
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">ID</th>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {hard.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 border-b text-left">
                                {item.id}
                            </td>
                            <td className="py-2 px-4 border-b text-left">
                                {item.name}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => handleEdit(item.id)}
                                >
                                    Accept
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pending;
