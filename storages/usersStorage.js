// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
    constructor() {
      this.storage = {};
      this.id = 0;
    }
  
    addUser({ firstName, lastName }) {
      const id = this.id;
      this.storage[id] = { id, firstName, lastName };
      this.id++;
    }
  
    getUsers() {
      return Object.values(this.storage);
    }
  
    getUser(id) {
      return this.storage[id];
    }
  
    updateUser(id, { firstName, lastName }) {
      this.storage[id] = { id, firstName, lastName };
    }
  
    deleteUser(id) {
      delete this.storage[id];
    }

    searchUsers(query) {
        const lowerCaseQuery = query.toLowerCase();
        return this.getUsers().filter(
          user =>
            user.firstName.toLowerCase().includes(lowerCaseQuery)
        );
      }
  }

  module.exports = new UsersStorage();
  