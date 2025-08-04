import Person from './Person';

const List = ({ people }, { func }) => {
  return (
    <section>
      {people.map((person) => {
        const { id } = person;
        return <Person key={id} {...person} />;
      })}
    </section>
  );
};

export default List;
