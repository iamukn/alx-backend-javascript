export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }

    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw new Error('Students must be an object');
    }
  }

  get name () {
    return this._name;
  }

  set name (val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length () {
    return this._length;
  }

  set length (val) {
    if (typeof val === 'number') {
      this._length = val;
    } else {
      throw new Error('Length must be a string');
    }
  }

  get students () {
    return this._students;
  }

  set students (val) {
    if (typeof val === 'object') {
      this._students = val;
    } else {
      throw new Error('Length must be a string');
    }
  }
}
