Neato.Services.cleaning = {

  stopCleaning: function() {
    var message = { reqId: "1", cmd: "stopCleaning" };
    return this.__call(message);
  },

  pauseCleaning: function() {
    var message = { reqId: "1", cmd: "pauseCleaning" };
    return this.__call(message);
  },

  resumeCleaning: function() {
    var message = { reqId: "1", cmd: "resumeCleaning" };
    return this.__call(message);
  },

  sendToBase: function() {
    var message = { reqId: "1", cmd: "sendToBase" };
    return this.__call(message);
  }
};
