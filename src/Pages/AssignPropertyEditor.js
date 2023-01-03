export default function AssignPropertyEditor(){

const AssignPropertyEditor = ({ codeData, updateData }) => {
    const type = codeData.type;
    const localData = codeData.data;

    if (type === "assign") {
        const onVariableChange = (event) => {
            localData.variable = event.target.value;

            updateData(localData);
        };

        const onValueChange = (event) => {
            localData.value = event.target.value;

            updateData(localData);
        };

        return (
            <div>
                <b>*There is a problem with output, Solve it.</b>
                <strong>Assign:</strong><br/>
                <input name="assign_var" type="text" defaultValue={localData.variable} placeholder="Variable" onChange={onVariableChange} />
                &nbsp;=&nbsp;
                <input name="assign_val" type="text" defaultValue={localData.value} placeholder="Value" onChange={onValueChange} />
            </div>
        );
    } 

    return null;
}
};
