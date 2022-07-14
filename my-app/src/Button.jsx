

function Button(props) {
    console.log("button rendering.");
    return <button>{props.title}</button>
}

// function SmallButton(props) {
function SmallButton({ title, color, children }) {
    // return <button>{"small"}</button>

    let style_obj = {
        color: "yellow",
        backgroundColor: "red"
    }

    return <>
        {children}
        <button className={color} style={style_obj}  >{title}</button>
    </>
}

function BigButton(props) {
    return <button>{"big"}</button>
}
// export default Button;

export {
    SmallButton,
    BigButton
}
