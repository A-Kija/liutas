const idGenerator = (key = 'lastId') => {
    let id = localStorage.getItem(key);
    if (null === id) {
        localStorage.setItem(key, 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem(key, id);
    return id;
}
export default idGenerator