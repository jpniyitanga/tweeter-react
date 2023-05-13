import Tweet from "./Tweet";

function TweetList() {
  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago",
  };

  return (
    <main className="container">
      <section className="tweets">
        <Tweet />
        <Tweet />
      </section>
    </main>
  );
}

export default TweetList;
