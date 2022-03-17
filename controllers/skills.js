const res = require('express/lib/response');
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit: editSkill,
    update
}

function index(req, res) {
    res.render('skills/index', { //the first param is referencing the file path of the view file it should render
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.create(req.body);

    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);

    res.redirect('/skills');
}

function editSkill(req, res) {
    console.log({paramID: req.params.id})
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res) {
    Skill.updateOne(req.params.id, req.body);

    res.redirect(`/skills/${req.params.id}`)
}



//In the controllers, we write our funcs that send our responses 