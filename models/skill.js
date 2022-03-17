const skills = [
    {id: 1, skill: 'html', outOfTen: 6},
    {id: 2, skill: 'css', outOfTen: 4},
    {id: 3, skill: 'JavaScript', outOfTen: 8},
    {id: 4, skill: 'Express', outOfTen: 3},
    {id: 5, skill: 'JQuery', outOfTen: 7},
    {id: 6, skill: 'Python', outOfTen: 6},
    {id: 7, skill: 'React', outOfTen: 5},
    {id: 8, skill: 'Google Cloud', outOfTen: 2},
    {id: 9, skill: 'WebRTC', outOfTen: 1},
    {id: 10, skill: 'Git', outOfTen: 5},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    //url params are strings..
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function deleteOne(paramID) {
    const idxOfID = skills.findIndex(skill => skill.id === parseInt(paramID));
    skills.splice(idxOfID, 1);
}

function create(reqBody) {
    createdSkill = {id: Date.now() % 1000000, skill: reqBody.skill, outOfTen: parseInt(reqBody.rating)}
    skills.push(createdSkill);
}

function updateOne(paramID, reqBody) {
    const idxOfID = skills.findIndex(skill => skill.id === parseInt(paramID));

    skills[idxOfID].skill = reqBody.skill;
    skills[idxOfID].outOfTen = reqBody.rating;
}