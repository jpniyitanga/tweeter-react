function Tweet() { 
  return (
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" src="https://i.imgur.com/73hZDYK.png" />
        <h2 className="tweet--name">Newton</h2>
        <small className="tweet--handle">@SirIsaac</small>
      </header>
      <div className="tweet--body">
        <p>
          If I have seen further it is by standing on the shoulders of giants
        </p>
      </div>
      <footer className="tweet--footer">
        <small className="footer--age">
          10 days ago
          <small>
            <span className="footer--actions">
              <a href="#">
                <i className="fa fa-flag"></i>
              </a>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </span>
          </small>
        </small>
      </footer>
    </article>
  );

}

export default Tweet;