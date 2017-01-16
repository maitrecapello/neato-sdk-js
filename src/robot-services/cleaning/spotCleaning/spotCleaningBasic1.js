Neato.Services.spotCleaning_basic1 = {

  startSpotCleaning: function(options) {
    options = options || {};

    var message = {
      reqId: "1",
      cmd: "startCleaning",
      params: {
        category: Neato.Constants.CLEAN_SPOT_MODE,
        mode: options.mode || Neato.Constants.TURBO_MODE,
        modifier: options.modifier || Neato.Constants.HOUSE_FREQUENCY_NORMAL,
        spotWidth: options.spotWidth || Neato.Constants.SPOT_AREA_LARGE,
        spotHeight: options.spotHeight || Neato.Constants.SPOT_AREA_LARGE
      }
    };
    return this.__call(message);
  },
  supportEcoTurboMode: function() {
    return true;
  },
  supportFrequency: function() {
    return true;
  },
  supportExtraCare: function() {
    return false;
  },
  supportArea: function() {
    return true;
  },
  stopCleaning: Neato.Services.cleaning.stopCleaning,
  pauseCleaning: Neato.Services.cleaning.pauseCleaning,
  resumeCleaning: Neato.Services.cleaning.resumeCleaning,
  sendToBase: Neato.Services.cleaning.sendToBase
};
