define(["vue","text!/components/button-counter/button-counter.tpl.html","css!/components/button-counter/button-counter.css"], function(Vue, template, css) {

  var data = {
  };

  var methods = {
      increaseCounter:function(){
          this.count++;
      }
  };

  return Vue.component("button-counter", {
    methods: methods,
    props: ['title', 'counterValue'],
    template: template,
    created: function() {
        console.log('created button instance');
    },
    data: function() {
      return {
          "count": this.counterValue || 0
      };
    }});
});