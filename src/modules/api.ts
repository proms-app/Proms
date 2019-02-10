// for now the call are fake unntil we install the api

export function getUser() {
  const text = fetch('http://192.168.43.106:8888/').then(response => response.json());
  console.log(text);
  return text;
}

export function getUserInfo() {
  const user = {
    id: 'userId',
    firstName: 'Bouchet',
    lastName: 'Clement',
    nums: '124-142',
    promo: 213,
    tbk: 'Li',
    avatar: 'url',
    travail: 'Dev',
    localisation: 'Paris',
    mobile: '0600000000',
  };

  return user;
}

export function getUserAccount() {
  const account = {
    id: 'AccountId',
    foys: -23,
    cotiz: false,
    taf: -21.2,
    other: 30,
  };

  return account;
}

export function getEvents() {
  const event = {
    id: 'eventId',
    title: 'Chofeps',
    date: '12/10/2018',
    location: 'Lille',
    subscriptions: 20,
    description: "Ceci est une courte description d'un évènement qui va se dérouler bientôt",
  };

  const event2 = {
    id: 'eventId2',
    title: 'Chops2',
    date: '12/10/2018',
    location: 'Lille',
    subscriptions: 160,
    description: "Ceci est une courte description d'un évènement qui va se dérouler bientôt",
  };

  const event3 = {
    id: 'eventId3',
    title: 'Chofweps3',
    date: '27/11/2018',
    location: 'Lille',
    subscriptions: 0,
    description: "Ceci est une courte description d'un évènement qui va se dérouler bientôt",
  };
  const event4 = {
    id: 'eventId4',
    title: 'Chopwfs4',
    date: '01/01/2019',
    location: 'Lille',
    subscriptions: 0,
    description: "Ceci est une courte description d'un évènement qui va se dérouler bientôt",
  };

  return [event4, event, event2, event3];
}
