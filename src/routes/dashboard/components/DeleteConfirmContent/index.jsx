export const DeleteConfirmContent = ({ carName, onConfirm, onCancel }) => {
    return (
        <div className="p-4 bg-white rounded-md shadow-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete <span className="font-bold">{carName}</span>?</p>
            <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400" onClick={onCancel}>Cancel</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={onConfirm}>Delete</button>
            </div>
        </div>
    );
}