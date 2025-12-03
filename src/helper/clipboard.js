import paper from "dinosaurmod-paper";

export function getPaperItemsFromARRAY(array) {
    const result = []
    if (!array || !array.forEach) return;
    array.forEach(item => {
        result.push(paper.project.importJSON(item))
    });
    return result;
}