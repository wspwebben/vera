module.exports = function() {
    return {
      env: process.env.ENV || 'stage'
    };
  };