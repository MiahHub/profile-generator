class employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName(name) {
    if (this.name === name) {
      if (/[^a-zA-Z]/.test(this.name)) {
        console.log(`The ${this.name} meets input criteria`);
        return this.name
      } else {
        console.log(`The ${this.name} is an invalid entry, use letters only.`);
        return false;
      }
    }
  }

  getId(id) {
    if (this.id === id) {
      if (this.id.matches(/^[0-9]+$/)) {
        console.log(`This ${this.id} is available.`);
        return this.id
      } else {
        console.log("Please input numerical characters only");
        return false;
      }
    }
  }

  getEmail(email) {
    if (this.emali === email) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        )
      ) {
        return this.email;
      } else {
        console.log("You have entered an invalid email address.");
        return false;
      }
    }
  }
  getRole() {
    return employee;
  }
}

module.exports = employee;