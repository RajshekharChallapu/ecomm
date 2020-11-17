
//Data storage
// users repository data modeling approach
// createing a file user.json file

const fs = require('fs');

class UserRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
        fs.writeFileSync(this.filename, '[]');
    }
  }

  async getAll(){
      
  }
}

const repo = new UserRepository('user.json');