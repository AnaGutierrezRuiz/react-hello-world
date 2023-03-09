import Button from "./Button";

function Section({ title, children, actionText, className }) {
  return (
    <section className={`${className} mb-2`}>
      <h1 className="mb-3">{title}</h1>
      <hr />
      {children}
      <div>
        <Button className="mt-1" text={actionText} />
      </div>
    </section>
  )
}

Section.defaultProps = {
  className: '',
  actionText: 'More info'
}

export default Section;