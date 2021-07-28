const Notification = ({ message }) => {
  if (message === null) return null;
  else return <div className="notify">{message}</div>;
};
export default Notification;
