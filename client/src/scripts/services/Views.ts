class Views{
    static views = ['login', 'register', 'todos', 'add_todos'];
    static showView(id){
        Views.views.forEach(view=>document.getElementById(view).classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    }
}

export {Views};