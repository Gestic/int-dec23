var setup = new Creep.Setup('miner');
setup.minControllerLevel = 3;
setup.default = {
    fixedBody: [WORK, WORK, WORK, WORK, CARRY, MOVE],
    multiBody: [WORK, MOVE],
    minAbsEnergyAvailable: 500,
    minEnergyAvailable: 0.3,
    maxMulti: 1,
    maxCount: room => room.sources.length
};
setup.RCL = {
    1: setup.none,
    2: setup.none,
    3: setup.default,
    4: setup.default,
    5: setup.default,
    6: setup.default,
    7: setup.default,
    8: setup.default
};
setup.checkForRequiredCreeps = () => {
//    let requiredCreeps = [];
    let requiredCreeps = [];
//    for each source{
    for (var roomName in Game.rooms) {
        var room = Game.rooms[roomName];
        room.sources.forEach((source)=>{
//        if source has no miner {
//        requiredCreeps.push(new miner
          var guests = _.countBy(source.targetOf, 'creepType');
          if (!guests['miner']) {
              var spawnRoomName = Room.bestSpawnRoomFor(source);
              var setup = 'miner';
              var parts = [WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE];
              //var cost = Creep.setup.bodyCosts(parts);
              var name;
              var destiny = source.id;
              for( var son = 1; name == null || Game.creeps[name]; son++ ) {
                  name = setup + '-' + son;
              }
              Game.rooms[spawnRoomName].spawnQueueHigh.push({                      
                  parts:parts,
                  name:name,
                  setup:setup,
                  destiny:destiny
                });
          }
//      }
        });
//    }
    }
//    if room.haulers == 0 
//      requiredCreeps.push(new miner);
//    for each creep in requiredCreeps{
//      let room = Room.bestSpawnRoom(task);
//      room.queue.push(creep);
//    }


/*            let notDeterminated = source => {
                let hasThisSource = data => { return data.determinatedTarget == source.id };
                let existingBranding = _.find(Memory.population, hasThisSource);
                return !existingBranding;
            };
            source = _.find(creep.room.sources, notDeterminated);
            if( source ) {
                creep.data.determinatedTarget = source.id;
            }
            */
/*
    var isAddable = target => that.isAddableTarget(target, creep);
    return _.find(creep.room.constructionSites, isAddable);
    */
/*
                let guests = _.countBy(source.targetOf, 'creepType');
                let count = guests[creep.data.creepType];
                */

/*
var loop = spawn => {
                if(spawn.room.my) spawn.loop();
            }
            _.forEach(Game.spawns, loop);
            */
}
module.exports = setup;