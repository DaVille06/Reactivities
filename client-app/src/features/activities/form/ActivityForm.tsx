import { Button, Form, Segment } from 'semantic-ui-react';
import { ChangeEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

// renamed activity to selected activity so we could reuse the name later
export default observer (function ActivityForm() {
  const {activityStore} = useStore();
  const {selectedActivity, closeForm, loading, createActivity, updateActivity} = activityStore;
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    date: '',
    description: '',
    category: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    activity.id ? updateActivity(activity) : createActivity(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // destructuring to get the name and value from the event target
    // these are the two fields we are tracking in the element itself
    const { name, value } = event.target;
    // spreading the exising properties of the activity
    // but the property of the key with name should be the value element
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input
          placeholder='Title'
          value={activity.title}
          name='title'
          // on change has an event tied to it
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder='Description'
          value={activity.description}
          name='description'
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Category'
          value={activity.category}
          name='category'
          onChange={handleInputChange}
        />
        <Form.Input
          type='date'
          placeholder='Date'
          value={activity.date}
          name='date'
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='City'
          value={activity.city}
          name='city'
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Venue'
          value={activity.venue}
          name='venue'
          onChange={handleInputChange}
        />
        <Button floated='right' positive type='submit' content='Submit' loading={loading} />
        <Button
          onClick={closeForm}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
})