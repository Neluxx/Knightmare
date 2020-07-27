namespace Game {

  export class ExternalData {
    public data: JSON;

    async loadJSON(): Promise<JSON> {
      //load data
      //const fs = require('file-system');
      //var data = fs.readFileSync("../ExternData/data.json");
      let rawData = await fetch("../ExternData/data.json");
      this.data = JSON.parse(await rawData.text());

      return this.data;
    }
  }
}