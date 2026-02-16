import "./index.css";

const Input = (props) => {
    const {label, ...rest} = props;
    return (
        <div className="input-container">
            {/* Label */}
            <label>{label}</label>
            {/*Input*/}
            <input {...rest}/>
        </div>
    );
};

export default Input;