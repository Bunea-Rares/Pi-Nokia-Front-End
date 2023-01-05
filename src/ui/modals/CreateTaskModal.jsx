const CreateTaskModal = ({
  setTitle,
  setDescription,
  setPriority,
  setStatus,
  show,
  setShow,
  handleEvent,
}) => {
  return (
    show && (
      <div
        className="fixed top-0 left-0 right-0 w-full h-full flex justify-center opacity-75 hover:cursor-default bg-black"
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
      >
        <div
          className="relative top-24 w-24 text-center flex justify-center items-baseline"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <form onSubmit={handleEvent}>
            <div className="p-2">
              <label htmlFor="name" className="p-2 text-2xl text-amber-500">
                Title
              </label>
              <input
                autoComplete="off"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="name"
                placeholder="Title"
                className="rounded-md text-black w-48 h-12 p-2  focus:outline-none focus:outline-amber-400 overflow-hidden"
              />
            </div>
            <div className="p-2">
              <label htmlFor="name" className="p-2 text-2xl text-amber-500 ">
                Description
              </label>
              <input
                autoComplete="off"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id="name"
                placeholder="Description"
                className="rounded-md text-black w-48 h-12 p-2  focus:outline-none focus:outline-amber-400 overflow-hidden"
              />
            </div>
            <div className="p-2">
              <label
                htmlFor="priority"
                className="p-2 text-2xl text-amber-500 "
              >
                Priority
              </label>
              <input
                type="text"
                name="priority"
                list="priority"
                onChange={(e) => setPriority(e.target.value)}
                className="rounded-md text-black w-48 h-12 p-2  focus:outline-none focus:outline-amber-400 overflow-hidden"
              />
              <datalist id="priority">
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
                <option value="CRITICAL">CRITICAL</option>
              </datalist>
            </div>

            <button className="ml-2 p-2 rounded-3xl bg-amber-500 hover:bg-indigo-700">
              Create Task
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateTaskModal;
