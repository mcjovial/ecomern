exports.config = (token) => {return {
  headers: {
    Authorization: `Bearer ${token}`,
  }
}}
