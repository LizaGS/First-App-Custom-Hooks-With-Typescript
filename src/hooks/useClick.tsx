
const useClick = () => {
    
    const handleClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        }
    return {handleClicked}
}

export default useClick