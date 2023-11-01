/*const Part = ({part1, part2,part3}) =>{
    return(
        <div>
            <p>{part1}</p>
            <p>{part2}</p>
            <p>{part3}</p>
        </div>
    )
}*/
// 1.5 Course Information, Step 5
const Part = (props) => {
    return (
      <div>
        <p>{props.name}: {props.exercises}</p>
      </div>
    );
};

export default Part;