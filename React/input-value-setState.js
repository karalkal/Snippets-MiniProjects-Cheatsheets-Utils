export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}



// const handleChange = (event) => setEmail(event.target.value);

// const handleChange = ({target}) => setEmail(target.value);