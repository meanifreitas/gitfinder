import { useState } from 'react';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import background from '../../assets/background.png';
import './styles.css';

function App() {
  const [user, setUser] = useState(''); 
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

   if (newUser.name) {
    const { avatar_url, name, bio, login } = newUser;
    setCurrentUser({ avatar_url, name, bio, login });

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if (newRepos.length) {
      setRepos(newRepos);
    }
   }
  }
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <img src={background} className='background' alt='brackground app'/>
        <div className='info'>
          <div>
            <input 
              name='user'
              placeholder='@username'
              value={user}
              onChange={event => setUser(event.target.value)}>
            </input>
            <button onClick={handleGetData}>Search</button>
          </div>
          {currentUser?.name ? (
          <>
            <div className='profileContainer'>
              <img src={currentUser.avatar_url} className='profile' alt='profile image'/>
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
          </>) : null}
          {repos?.length ? (<>
            <div>
              <h4 className='repositories'>Repositories</h4>
              {repos.map(item => {
                return <ListItem title={item.name} description={item.description}></ListItem>
              })}
            </div>
          </>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
