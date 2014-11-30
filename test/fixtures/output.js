module.exports = {
  aliases: {
    default: [
      'test'
    ],
    anotherTask: {
      description: 'This is an awesome task',
      tasks: [
        'foo',
        'bar'
      ]
    }
  },
  coffeefile: {
    coffeeFile: {
      options: {
        filename: 'read.coffee'
      }
    }
  },
  jsfun: {
    jsFunFile: {
      options: {
        filename: 'jsfun.js',
        test: 1
      }
    }
  },
  jsobj: {
    jsobjFile: {
      options: {
        filename: 'jsobj.js',
        debug: true
      }
    }
  },
  jsonfile: {
    jsonFile: {
      options: {
        filename: 'read.json',
        regexp: '/(\\d{1,})\\%//'
      }
    }
  },
  yamlfile: {
    yamlFile: {
      options: {
        filename: 'read.yaml',
        regexp: '/(\\d{1,})\\%//'
      }
    }
  },
  ymlfile: {
    ymlFile: {
      options: {
        filename: 'read.yml',
        regexp: '/(\\d{1,})\\%//'
      }
    }
  }
};
