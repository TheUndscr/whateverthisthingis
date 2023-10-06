export default function B(props: {num: number, done: boolean, func: any}) {
    return (
    <>
        <button onClick={props.func} className={props.done ? "done" : ""}>{props.num ?? ":)"}</button>
    </>
    );
}