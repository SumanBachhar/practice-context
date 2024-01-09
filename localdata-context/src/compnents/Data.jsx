import DataDetails from "./DataDetails";
import questions from "../data/questions";
const Data = () => {
  const questionsArray = [...questions];
  return (
    <>
      {questionsArray.map((item) => {
        return <DataDetails key={item.id} {...item} />;
      })}
    </>
  );
};

export default Data;
