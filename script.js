let users = [
  {
    login: 'Johann Bach',
    password: '1750'
  },
  {
    login: 'Ludwig Beethoven',
    password: '1827'
  },
  {
    login: 'Richard Strauss',
    password: '1949'
  },
  {
    login: 'Felix Mendelson',
    password: '1847'
  }
];
function autorisation () {
  let name = prompt('Enter your name');
  let pass = prompt('Enter your password');
  let x = false;
    for (let i = 0; i < users.length; i++) {
      if ((name === users[i].login) && (pass === users[i].password)) {
        x = true;
        alert('Good day ' + name);
        break;
      }
    }
    if (!x) {
    alert('Wrong login or password');
    autorisation();
  }
}
autorisation();
