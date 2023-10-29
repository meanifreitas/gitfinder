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
            <button>Search</button>
          </div>
          <div className='profileContainer'>
            <img src='https://avatars.githubusercontent.com/u/61467221?v=4' className='profile' alt='profile image'/>
            <div>
              <h3>Meani Freitas</h3>
              <span>@meanifreitas</span>
              <p>Description</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className='repositories'>Repositories</h4>
            <ListItem title='rep1' description='description'></ListItem>
            <ListItem title='rep1' description='description'></ListItem>
            <ListItem title='rep1' description='description'></ListItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
