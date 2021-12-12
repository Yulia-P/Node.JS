var util = require('util');
var ee = require('events');

var db_data = [
    { id: 1, name: 'Evans C', bday: '1981-06-13' },
    { id: 2, name: 'Stan S', bday: '1982-08-13' },
    { id: 3, name: 'Mackie A', bday: '1978-09-23' },
    { id: 4, name: 'Holland T', bday: '1996-06-01' },
    { id: 5, name: 'Rudd P', bday: '1969-01-06' }
];

function DB() {
    this.select = () => { return db_data; };
    this.insert = (r) => { db_data.push(r); };
    this.update = (r) => {
        var index = db_data.findIndex(function (item, i) {
            return item.id == r.id;
        });
        if (index != -1) {
            db_data[index].name = r.name;
            db_data[index].dbay = r.dbay;
            return db_data[index];
        }
        else
            return 'not found';
    }
    this.delete = (id) => {
        var index = db_data.findIndex(function (item, i) {
            return item.id === id;
        });
        if (index != -1)
            return db_data.splice(index, 1);
        else
            return 'not found';
    }
    this.commit = () => {
        console.log('commit');
    }
}

util.inherits(DB, ee.EventEmitter);

exports.DB = DB;