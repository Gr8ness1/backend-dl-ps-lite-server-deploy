

  const handleSave = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/searches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(property)
      });
      const result = await res.json();
      if (result.success) alert('Search saved!');
    } catch (err) {
      console.error('Save failed:', err);
    }
  };


  const handleSave = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/searches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(property)
      });
      const result = await res.json();
      if (result.success) alert('Search saved!');
    } catch (err) {
      console.error('Save failed:', err);
    }
  };
