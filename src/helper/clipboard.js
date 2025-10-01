import paper from "dinosaurmod-paper";

export function getPaperItemsFromARRAY(thing) {
    const test = []
    if (!thing || !thing.forEach) return;
    thing.forEach(item => {
        test.push(paper.project.importJSON(item))
    });
    return test;
}