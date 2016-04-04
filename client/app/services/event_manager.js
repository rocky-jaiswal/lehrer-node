import {EventEmitter} from 'fbemitter';

const EventManager = function () {
  this.emitter = this.emitter || new EventEmitter();

  this.authChannel = 'authState';

  this.getEmitter = function() {
    return this.emitter;
  }
}

export default new EventManager();
