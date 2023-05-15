async function fetchGreeting() {
  const body = await fetch('http://localhost:9000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'query { greeting }',
    }),
  });
  const response = await body.json();
  console.log(response);
  return response;
}

fetchGreeting();
