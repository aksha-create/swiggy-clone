const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact us page</h1>
      <form>
        <input
          className="p-2 m-2 border border-black rounded-lg"
          placeholder="name"
        />
        <input
          className="p-2 m-2 border border-black rounded-lg"
          placeholder="message"
        />
        <button className="p-2 m-2 border border-black rounded-lg bg-slate-400">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
