import React from 'react';

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
        <div className="containermx mx-auto">
            <table className="min-w-full bg-black">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {hard.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 border-b">{item.id}</td>
                            <td className="py-2 px-4 border-b">{item.name}</td>
                            <td className="py-2 px-4 border-b">
                            </td>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => handleEdit(item.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pending;
