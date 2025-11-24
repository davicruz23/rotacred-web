type Props = {
  footerStyle?: string;
};
const FooterSection = ({ footerStyle }: Props) => {
  return (
    <footer className={`footer-area ${footerStyle ? footerStyle : ""}`}>
      <div className="copywrite-text px-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} Todos os direitos reservados por {" "}
          <a href="#">RotaCred</a>
        </p>
      </div>
    </footer>
  );
};
export default FooterSection;
