import "./Test.css";

function Test () {
    const list = ["SG", "HK", "VN", "MY", "TH"];
    return (
        <>
        <h1>Test</h1>
        <ul>
            {list.map((item, index) => <li key={index}>{item}</li> )}
        </ul>
        </>
    );
}

export default Test
