type AppFunnelPropsT = { rootEl?: React.HTMLAttributes<HTMLDivElement> };

export default function AppFunnel(props: AppFunnelPropsT) {
  return (
    <section className="app-funnel" {...props.rootEl}>
      <p>Funil de produção</p>
    </section>
  );
}
