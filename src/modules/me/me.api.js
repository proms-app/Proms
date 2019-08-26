const ClemData = {
  id: 'userId',
  nom: 'Bouchet',
  prenom: 'Clement',
  bucque: 'Dja Sprey',
  nums: 124,
  email: 'clement.bouchet@gadzorg',
  telephone: '0600000000',
  solde: 10.2,
  lieu: 'Paris',
  activite: 'Dev',
};

const getFakeData = name => {
  switch (name) {
    case 'Clement':
      return ClemData;
    default:
      throw new Error('LOGIN ERROR');
  }
};

export const postLogin = async name =>
  new Promise(resolve => setTimeout(() => resolve(getFakeData(name)), 300));
