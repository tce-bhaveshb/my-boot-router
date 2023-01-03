export default function LogPropertyEditor(){

    const LogPropertyEditor12 = ({ codeData, updateData }) => {
    const type = codeData.type;
    const localData = codeData.data;

    if (type === "log") {
        const onMessageChange = (event) => {
            localData.message = event.target.value;

            updateData(localData);
        };

        return (
            <div>
                <strong>Log:</strong><LogPropertyEditor12 /><br />
                <input name="log_message" type="text" defaultValue={localData.message} placeholder="Message" onChange={onMessageChange} />
            </div>
        );
    }

    return null;
}
};
