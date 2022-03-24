import React, {useState, useEffect} from 'react'

export default function Recommendation() {
  
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  
  return (
    <div>hello</div>
  )
}
