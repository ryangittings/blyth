const components = {};

const app = {
  init: () => {
    Object.entries(components).forEach(component => {
      const key = component[0];
      const value = component[1];

      const nodes = document.querySelectorAll(`[data-${key}]`);
      nodes.forEach(node => {
        let options = node.getAttribute('data-options');

        if (options) {
          options = options.split(',').reduce((acc, cur) => {
            const data = cur.split(':');
            const option1 = data[0];
            const option2 = data[1];
            acc[option1] = option2;
            return acc;
          }, {});
        }

        new value(node, options);
      });
    });
  },
};

app.init();
