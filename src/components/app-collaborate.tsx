type AppCollaboratePropsT = { rootEl?: React.HTMLAttributes<HTMLDivElement> };

export default function AppCollaborate(props: AppCollaboratePropsT) {
  return (
    <section className="app-collaborate" {...props.rootEl}>
      <p>Quer ajudar?</p>
    </section>
  );
}
