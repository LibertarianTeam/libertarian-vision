type AppLastVideosPropsT = { rootEl?: React.HTMLAttributes<HTMLDivElement> };

export default function AppLastVideos(props: AppLastVideosPropsT) {
  return (
    <section className="app-last-videos" {...props.rootEl}>
      <p>Últimos vídeos do canal</p>
    </section>
  );
}
