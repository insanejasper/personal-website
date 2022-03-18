export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer>
      ©
      {' '}
      { CURRENT_YEAR }
      {' '}
      Paras Praj | All Rights Reserved
    </footer>
  );
}
