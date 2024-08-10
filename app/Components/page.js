const LearnMore = () => {
  const learn = () => {
    window.open(
      "https://github.com/areebabano/Hello-World-Next.js/blob/main/README.md",
      "_blank"
    );
  };
  return (
    <div>
      <p>
        Clicking on the <b>'Learn More'</b> button will take you to a page where
        <br />
        you can understand the folder and file structure of Next.js.
      </p>
      <button onClick={learn}>
        <b>Learn More</b>
      </button>
    </div>
  );
};
export default LearnMore
