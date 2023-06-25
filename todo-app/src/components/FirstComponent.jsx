// function FirstComponent({text}) {
function FirstComponent(props) {
    const { text } = props
    // return (<div>{props.text}</div>);
    return (<div>{text || "Hello from FirstComponent"}</div>);
}
export default FirstComponent;