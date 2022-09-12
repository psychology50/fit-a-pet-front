const SubmitBtn = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <button className="subBtn" onClick={handleSubmit}>{props.type}</button>
    );
}

export default SubmitBtn;