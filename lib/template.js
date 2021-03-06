var Template = (function() {

  function Template(src) {
    if (src.match(/^#/)) {
      this.src = document.getElementById(src.replace(/^#/, '')).innerHTML;
    }
    else {
      this.src = src;
    }
  }

  Template.prototype.render = function(data, settings) {
    return _.template(this.src, data, settings);
  };

  return Template;
})();
