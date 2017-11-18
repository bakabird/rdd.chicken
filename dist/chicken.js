"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require("events");
var chicken = /** @class */ (function () {
    function chicken(jobCount, afterJobs) {
        var _this = this;
        this.jobCount = jobCount;
        this.afterJobs = afterJobs;
        this.log = false;
        this.Emitter = new events.EventEmitter();
        this.Emitter.on('down', function () {
            _this.jobCount = _this.jobCount - 1;
            if (_this.log) {
                console.log("total: " + _this.jobCount);
            }
            if (_this.jobCount == 0) {
                _this.afterJobs();
            }
        });
    }
    chicken.prototype.oneDown = function (msg) {
        if (this.log) {
            console.log(msg);
        }
        this.Emitter.emit('down');
    };
    return chicken;
}());
exports.chicken = chicken;
