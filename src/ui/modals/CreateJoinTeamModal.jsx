const CreateJoinTeamModal = ({
  name,
  setValue,
  show,
  setShow,
  handleEvent,
}) => {
  return (
    show && (
      <div
        className="fixed hover:cursor-default top-0 left-0 right-0 w-full h-full opacity-75 bg-black"
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
      >
        <div
          className="relative top-1/2 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleEvent}>
            <label htmlFor="name" className="p-2 text-2xl text-amber-500 ">
              {name === "JOIN" ? "ID" : "Name"}
            </label>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              id="name"
              placeholder={name === "JOIN" ? "ID" : "Name"}
              className="rounded-md text-black w-48 h-12 p-2  focus:outline-none focus:outline-amber-400 overflow-hidden"
            />
            <button className="ml-2 p-2 rounded-3xl bg-amber-500 hover:bg-indigo-700">
              {name === "JOIN" ? "JOIN" : "CREATE"}
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateJoinTeamModal;
