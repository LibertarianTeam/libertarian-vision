type AppLastPostsPropsT = { rootEl?: React.HTMLAttributes<HTMLDivElement> };

export default function AppLastPosts(props: AppLastPostsPropsT) {
  return (
    <section className="app-last-posts" {...props.rootEl}>
      <p>Últimos artigos publicados</p>
    </section>
  );
}
