function animalSort(state, by) {
    const animals = state.slice();
    switch (by) {
        case 'name_asc':
            animals.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'name_desc':
            animals.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'weight_asc':
            animals.sort(function(a, b) {
                return a.weight - b.weight;
            });
            break;
        case 'weight_desc':
            animals.sort(function(a, b) {
                return b.weight - a.weight;
            });
            break;
        default:
    }
    return animals
}
export default animalSort;