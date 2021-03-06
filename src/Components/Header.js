import PropTypes from 'prop-types';
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
// this is one way too do it
// below is another way involving defaultProps
//REMEMBER IMPORTANT!!!
//   )
// }



const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header
