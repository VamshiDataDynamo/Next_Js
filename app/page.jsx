import Feed from "@/components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
        dignissimos earum doloribus quas quasi deleniti, hic libero dolor sed
        ducimus quia saepe nulla enim at, sint molestiae harum quidem assumenda.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
