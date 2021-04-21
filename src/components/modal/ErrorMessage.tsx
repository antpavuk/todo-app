const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <div className="error-message">
      <h3>Error occured!</h3>
      <p>{message || "Unknown!"}</p>
    </div>
  );
};

export default ErrorMessage;
