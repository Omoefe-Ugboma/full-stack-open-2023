/*const Header = ({course}) => {
    return (
      <div>
        <h1>{course}</h1>
    </div>
    );
  };
  */
//  1.4 Course Information, Step 4
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header;