class getCoronavirusData {
  constructor() {
    this.url = "https://api.covid19api.com/summary";
  }
  async getNewConfirmed() {
    let response = await fetch(this.url);
    let data = await response.json();
    let NewConfirmed = data.Countries[10].NewConfirmed;

    return NewConfirmed;
  }

  async getTotalConfirmed() {
    let response = await fetch(this.url);
    let data = await response.json();
    let TotalConfirmed = data.Countries[10].TotalConfirmed;

    return TotalConfirmed;
  }

  async getnewDeaths() {
    let response = await fetch(this.url);
    let data = await response.json();
    let NewDeaths = data.Countries[10].NewDeaths;

    return NewDeaths;
  }

  async getTotalDeaths() {
    let response = await fetch(this.url);
    let data = await response.json();
    let TotalDeaths = data.Countries[10].TotalDeaths;

    return TotalDeaths;
  }

  async getnewRecovered() {
    let response = await fetch(this.url);
    let data = await response.json();
    let NewRecovered = data.Countries[10].NewRecovered;

    return NewRecovered;
  }

  async getTotalRecovered() {
    let response = await fetch(this.url);
    let data = await response.json();
    let TotalRecovered = data.Countries[10].TotalRecovered;

    return TotalRecovered;
  }
}
