const { Tool } = require('langchain/tools');

class TestTool extends Tool {
  constructor() {
    super();
    this.name = 'test-tool';
    this.description = 'You can return a random sentence with \'test-tool\'';
  }

  async _call(input) {
    // Your tool's functionality goes here
    try {
      console.log(input);
      return 'As the sun set over the horizon, the sky turned a brilliant shade of orange, casting a warm glow over the tranquil lake.';
    } catch (error) {
      return 'I don\'t know how to do that.';
    }
  }
}

// Export
module.exports = TestTool;
