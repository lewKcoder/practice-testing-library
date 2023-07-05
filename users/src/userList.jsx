export const UserList = (props) => {
  const { users } = props;

  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>Name</tr>
        <tr>Email</tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};
