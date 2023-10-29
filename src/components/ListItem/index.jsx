import './styles.css';

const ListItem = ({ title, description }) => {
  return <div className='listItem'>
    <strong>{title}</strong>
    <p>{description}</p>
    <hr />
  </div>
};

export default ListItem;