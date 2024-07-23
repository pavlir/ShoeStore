import { ReactNode } from "react";

interface ISection {
  classSection?: string,
  children?: ReactNode,
}

export const Section : React.FC<ISection> = (props) => {
  const {classSection, children} = props;
  return (
    <section className={classSection}>
      {children}
    </section>
  )
}
