type AppNumbersPropsT = { rootEl?: React.HTMLAttributes<HTMLDivElement> };

export default function AppNumbers(props: AppNumbersPropsT) {
  return (
    <section className="app-numbers" {...props.rootEl}>
      <p>Números</p>
    </section>
  );
}
