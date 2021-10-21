const idGenerator = () => {
    let id = localStorage.getItem('lastId');
    if (null === id) {
        localStorage.setItem('lastId', 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem('lastId', id);
    return id;
}
export default idGenerator