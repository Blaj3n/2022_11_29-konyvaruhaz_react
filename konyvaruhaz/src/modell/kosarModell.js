class KosarModell {
  #kosar = [];
  #db;
  #osszAr;
  constructor(kosaram) {
    this.#kosar = kosaram;
    this.#db = 0;
    this.#osszAr = 0;
  }
  getKosar() {
    return this.#kosar;
  }
  setKosar(adat) {
    this.#kosar.push(adat);
  }
}

export default KosarModell;
