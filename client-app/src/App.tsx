import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

// root component that is only destroyed when we leave the application
function App() {
  // remember the activities that are coming back
  // request goes to api to get data and stored in state
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // code that we want to happen when component renders
    axios.get('http://localhost:5000/api/activities').then((response) => {
      console.log('This is a test!');
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
