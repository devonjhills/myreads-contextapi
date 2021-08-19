import { DropdownButton, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { SHELFINFO } from '../constants'
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const MoveToShelfMenu = ({ book }) => {

  const {updateBook} = useContext(BookContext);

  const handleSelection = (eventKey) => {
    const shelf = eventKey;
    updateBook(book, shelf);
  }

  return (
    <div className="book-shelf-changer">
      <DropdownButton
        title={
          <FontAwesomeIcon
            title={'Move To Shelf'}
            icon={faChevronCircleDown}
            size={'2x'} />}
        id="dropdown-menu"
        variant="light"
        size="sm"
        defaultValue={book.shelf ? book.shelf : 'none'}
        onSelect={handleSelection}>
        {SHELFINFO.map(
          (item) => (
            <Dropdown.Item
              key={item.key}
              eventKey={item.key}
              disabled={item.key === book.shelf}
              style={item.key === book.shelf ? { background: 'black' } : { background: '' }}>
              {item.label}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </div>
  )
}

export default MoveToShelfMenu








/* display options:

  const shelfInfo = [
    {
      key: 'currentlyReading',
      label: 'Currently Reading'
    },
    {
      key: 'wantToRead',
      label: 'Want To Read'
    },
    {
      key: 'read',
      label: 'Read'
    },
    {
      key: 'none',
      label: 'None'
    }


      <DropdownButton
        title={
          <FontAwesomeIcon
            title={'Move To Shelf'}
            icon={faChevronCircleDown}
            size={'2x'} />}
        id="dropdown-menu"
        variant="light"
        size="sm"
        defaultValue={book.shelf ? book.shelf : 'none'}
        onSelect={handleSelection}>
        {shelfInfo.map(
          (item) => (
            <Dropdown.Item
              key={item.key}
              eventKey={item.key}
              disabled={item.key === book.shelf}
              style={item.key === book.shelf ? { background: 'black' } : { background: '' }}>
              {item.label}
            </Dropdown.Item>
          ))}
      </DropdownButton>



    <ToggleButtonGroup
      type="radio"
      name="options"
      size="sm"
      defaultValue={book.shelf ? book.shelf : 'none'}>
      {shelfInfo.map(
        (item) => (
          <ToggleButton
            key={item.key}
            value={item.key}
            variant="outline-dark"
            disabled={item.key === book.shelf}
            onClick={handleSelection}>
            {item.label}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>



      <select
        value={book.shelf ? book.shelf : 'none'}
        onChange={(event) => { updateBook(book, event.target.value) }}>
        <option value="move" disabled>Move to...</option>

        <option value="currentlyReading">Currently Reading</option>

        <option value="wantToRead">Want to Read</option>

        <option value="read">Read</option>

        <option value="none">None</option>

      </select>
*/
