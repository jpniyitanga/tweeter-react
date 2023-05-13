function TweetForm() { 
  const placeholderText = "What are you humming about?" 
  return (
    <main className="container">
      <section className="newtweet">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          method="post"
          action="/tweets"
          className="newtweet__form"
        >
          <textarea
            className="form__textarea"
            name="text"
            placeholder={placeholderText}
          ></textarea>
          <input
            onClick={(event) => {
              event.preventDefault();
            }}
            type="submit"
            value="Tweet"
            className="form__input"
          />
          <span className="form__counter">140</span>
        </form>
      </section>
    </main>
  );
}

export default TweetForm;