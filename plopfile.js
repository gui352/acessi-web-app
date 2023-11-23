module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Generate a React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
        templateFile: 'plop-templates/style.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Generate a React page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/page.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.css',
        templateFile: 'plop-templates/style.hbs',
      },
    ],
  });
};
