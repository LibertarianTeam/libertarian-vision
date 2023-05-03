type AppNewsletterPropsT = { rootEl?: React.HTMLAttributes<HTMLDivElement> };

export default function AppNewsletter(props: AppNewsletterPropsT) {
  return (
    <section className="app-newsletter" {...props.rootEl}>
      <p>Newsletter do Canal</p>
    </section>
  );
}
