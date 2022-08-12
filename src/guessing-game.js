class GuessingGame {
  constructor() {
    this.minNumber;
    this.maxNumber;
    this.mid;
  }

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    this.mid = Math.round((this.minNumber + this.maxNumber) / 2);
    return this.mid;
  }

  lower() {
    this.maxNumber = this.mid;
    this.mid = Math.round((this.mid + this.minNumber - 1) / 2);
    return this.mid;
  }

  greater() {
    this.minNumber = this.mid;
    this.mid = Math.round((this.mid + this.maxNumber - 1) / 2);
    return this.mid;
  }
}

module.exports = GuessingGame;
