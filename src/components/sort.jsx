const Sort = ({ dispatchWebsite }) => {
  return (
    <select id="pet-select">
      <option value="">--Sort list--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  );
};

export default Sort;
