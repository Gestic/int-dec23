var mod = {
    guard: load("task.guard"),
    register: function () {
        let tasks = [
            Task.guard
        ];
        var loop = task => {
            task.register();
        }
        _.forEach(tasks, loop);
    }
};
/*
Object.defineProperty(mod, 'taskHeap', {
    configurable: true,
    get: function() {
        if(_.isUndefined(Memory.tasks)) {
            Memory.tasks = [];
        }
        return Memory.tasks;
    },
    set: function(value) {
        Memory.tasks = value;
    }
});*/
module.exports = mod;
