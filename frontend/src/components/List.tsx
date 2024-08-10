import './List.css'

function List(){
    const handleClick = () => {
        window.location.href="/todolist";
    }

    return (
        <button type="button" onClick={handleClick} className='list' style={{backgroundColor:"teal"}}>
            <p className='list-title'>Title</p>
            <span className='list-number'>X</span>
        </button>
    );
}

export default List;
