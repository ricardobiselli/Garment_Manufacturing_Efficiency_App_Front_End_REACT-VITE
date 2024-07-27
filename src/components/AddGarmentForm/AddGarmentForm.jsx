import { useState } from 'react';

const AddGarmentForm = () => {
    const [garmentName, setGarmentName] = useState("");
    const [description, setDescription] = useState("");
    const [operations, setOperations] = useState([{ operationName: '', timeAllowed: '' }]);

    const handleGarmentName = (e) => {
        setGarmentName(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleOperationChange = (index, e) => {
        const values = [...operations];
        values[index][e.target.name] = e.target.value;
        setOperations(values);
    };

    const handleAddOperation = () => {
        setOperations([...operations, { operationName: '', timeAllowed: '' }]);
    };

    const handleRemoveOperation = (index) => {
        const values = [...operations];
        values.splice(index, 1);
        setOperations(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
        console.log({
            garmentName,
            description,
            operations,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add garment name</label>
            <input type='text' value={garmentName} onChange={handleGarmentName} />
            <label>Add garment description</label>
            <input type='text' value={description} onChange={handleDescription} />
            <div>
                <label>Add operations and time allowed</label>
            </div>
            {operations.map((op, index) => (
                <div key={index}>
                    <div>
                        <input
                            type='text'
                            name='operationName'
                            value={op.operationName}
                            onChange={(e) => handleOperationChange(index, e)}
                        />
                        <input
                            type='text'
                            name='timeAllowed'
                            value={op.timeAllowed}
                            onChange={(e) => handleOperationChange(index, e)}
                        />
                        <button type="button" onClick={()=>handleRemoveOperation(index)}>Remove operation</button>

                    </div>
                </div>
            ))}
            <button type="button" onClick={handleAddOperation}>Add Operation</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddGarmentForm;

