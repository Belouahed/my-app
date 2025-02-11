import { useEffect, useState } from "react";
import { fetchUsers, addUser, deleteUser } from "./api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleAddUser = async () => {
    if (name && email) {
      const newUser = await addUser(name, email);
      if (newUser) {
        setUsers([...users, newUser]);
        setName("");
        setEmail("");
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    const deletedUser = await deleteUser(userId);
    if (deletedUser) {
      setUsers(users.filter(user => user._id !== userId));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 قائمة المستخدمين</h1>
      <div>
        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="الإيميل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>إضافة مستخدم</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user._id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
